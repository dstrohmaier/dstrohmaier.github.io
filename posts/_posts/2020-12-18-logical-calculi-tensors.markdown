---
layout: post
title:  "Simulating Basic Logic with Tensors"
date:   2020-12-18 13:00:13 +0000
category: posts
---

Can we simulate basic logic operations, i.e. the operations of first-order predicate logic, using tensors? In his 2013 paper "Towards a Formal Distributional Semantics: Simulating Logical Calculi with Tensors", Edward Grefenstette made some suggestions for such simulation.  The paper's motivation was to take a step towards combining distributional with formal semantics. Such a connection remains elusive. 

In this this notebook, I'm exploring the basic mechanisms Grefenstette proposed for simulating basic logic with tensors. If anything is unclear, have a look into the paper https://www.aclweb.org/anthology/S13-1001 or get in touch with me.


```python
import numpy as np
import pandas as pd
import itertools
```

Following Coecke et al. 2010, Grefenstette uses a boolean vector space called $B$. The basis of $B$ are the vectors $\top = \begin{bmatrix}1 & 0 \end{bmatrix}^\top$ and $\bot = \begin{bmatrix}0 & 1\end{bmatrix}^\top$, which stand for truth and falsity respectively.


```python
t = np.array([1, 0])
f = np.array([0, 1])
t
```




    array([1, 0])



But for formal logic we need much more than truth and falsity. We need also a domain of objects and predicates which can hold for these objects. The objects in the domain $\mathcal{D}$ are represented using hot-one vectors. For example, the following three vectors cover the domain of John, Chris and Tom, i.e. $\mathcal{D} = \{John, Chris,Tom\}$.


```python
john, chris, tom = (np.eye(N=1, M=3, k=i, dtype=int).squeeze() for i in range(3))
john, chris, tom
```




    (array([1, 0, 0]), array([0, 1, 0]), array([0, 0, 1]))



In the next step we want to apply predicates to entities in the domain. More specifically, we want to have a representation of predicates which allows us to find out whether a predicate applies to an entity. For example, given the unary predicate P="is a mathematician", we want to know whether it holds of John and Tom. For this purpose, unary predicates are represented as mapping objects from the domain to the boolean space, that is $f_p: \mathcal{D} \to \mathbb{B}$ so that

$f_P(x) = 
\begin{cases}
\top & \text{if}\, x \in \text{extension of P} \\
\bot & \text{otherwise}
\end{cases}$

This linear map can again be expresse as a tensor, this time a tensor of rank 2, i.e. a matrix. If we assume that John and Chris are mathematician but Tom is not, then the matrix is $\pmb{\text{M}}^P = \begin{bmatrix}1 & 1 & 0 \\ 0 & 0 & 1\end{bmatrix}$.


```python
mp = [[1, 1, 0], [0, 0, 1]]
```

When we now apply the one-hot vector for John to the predicate matrix using matrix vector multiplication, we get the appropriate truth-value vector. In the notion of linear algebra:

$\pmb{\text{M}}^P \times \pmb{\text{john}} = \begin{bmatrix}1 & 1 & 0 \\ 0 & 0 & 1\end{bmatrix} \begin{bmatrix}0\\ 1\\ 0\end{bmatrix} = \begin{bmatrix}1\\ 0\end{bmatrix} = \top$


```python
value = np.matmul(mp, john)
value
```




    array([1, 0])




```python
np.all(value == t)
```




    True



This approach also works for tom, who is not a mathematician.

$\pmb{\text{M}}^P \times \pmb{\text{tom}} = \begin{bmatrix}1 & 1 & 0 \\ 0 & 0 & 1\end{bmatrix} \begin{bmatrix}0\\ 0\\ 1\end{bmatrix} = \begin{bmatrix}0\\ 1\end{bmatrix} = \bot$


```python
np.matmul(mp, tom)
```




    array([0, 1])



## Logical Connectives

So far we have only treated truth values, the domain individuals, and unary predicates. The next step is to intrduce logical connectives. Logical connectives such as $\neg, \lor, \land, \to$ are truth-functional, that is they take one or more truth-values as input and this input determines another truth-value as output. To implement these functions, Grefenstette again uses tensors. For the unary negation operator, a simple swap matrix suffices:

$\pmb{\text{T}}^\neg = \begin{bmatrix}0 & 1 \\ 1 & 0 \end{bmatrix}$.


```python
neg = np.eye(2, dtype=int)
neg[[0, 1]] = neg[[1, 0]]
neg
```




    array([[0, 1],
           [1, 0]])




```python
np.matmul(neg, t), np.matmul(neg, f)
```




    (array([0, 1]), array([1, 0]))



The most common logical connectives are binary and not unary. To represent them we require rank 3 tensors, which are harder to visualise. Following Grefenstette, the logical or is represented as $\pmb{\text{T}}^\lor = \left[ \begin{array}{c c | c c}1 & 1 & 1 & 0 \\ 0 & 0 & 0 & 1\end{array} \right]$, where the vertical line serves to introduce a third axis.


```python
lor = np.array([[[1, 1],
                 [1, 0]],

                [[0, 0],
                 [0, 1]]])

lor
```




    array([[[1, 1],
            [1, 0]],
    
           [[0, 0],
            [0, 1]]])



As with predicates, the application of these tensors happen via the tensor product. For example,

$\pmb{\text{T}}^\lor \times \top \times \bot = \left[ \begin{array}{c c | c c}1 & 1 & 1 & 0 \\ 0 & 0 & 0 & 1\end{array} \right] \begin{bmatrix}1\\ 0\end{bmatrix} \begin{bmatrix}0\\ 1\end{bmatrix} = \begin{bmatrix}1\\ 0\end{bmatrix} = \top$


```python
np.matmul(np.matmul(lor, f), t)
```




    array([1, 0])




```python
land = np.array([[[1, 0],
                  [0, 0]],

                 [[0, 1],
                  [1, 1]]])

land
```




    array([[[1, 0],
            [0, 0]],
    
           [[0, 1],
            [1, 1]]])




```python
cond = np.array([[[1, 0],
                  [1, 1]],

                 [[0, 1],
                  [0, 0]]])
cond
```




    array([[[1, 0],
            [1, 1]],
    
           [[0, 1],
            [0, 0]]])



To make things a little easier and going beyond the Grefenstette paper, I embed the locgical connectives in lambda functions which do the tensor product for us.


```python
n = lambda x: np.matmul(neg, x)
a = lambda x, y: np.matmul(np.matmul(land, y), x)
o = lambda x, y: np.matmul(np.matmul(lor, y), x)
c = lambda x, y: np.matmul(np.matmul(cond, y), x)
```


```python
n(t)
```




    array([0, 1])



With this slightly more convenient format, the following function will now create a truth table for any binary logical connective.


```python
def truth_table(func):
    all_input_pairs = itertools.product([t, f], [t, f])
    
    table = []
    for input_pair in all_input_pairs:
        table.append({
            "first": input_pair[0],
            "second": input_pair[1],
            "result": func(input_pair[0], input_pair[1])
            })
            
    return table
```

As this function shows, the truth table for the logical or ($\lor$) is correct.

| First  | Second | Result |
|--------|--------|--------|
| $\top$ | $\top$ | $\top$ |
| $\top$ | $\bot$ | $\top$ |
| $\bot$ | $\top$ | $\top$ |
| $\bot$ | $\bot$ | $\bot$ |


```python
pd.DataFrame(truth_table(o))
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>first</th>
      <th>second</th>
      <th>result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>[1, 0]</td>
      <td>[1, 0]</td>
      <td>[1, 0]</td>
    </tr>
    <tr>
      <th>1</th>
      <td>[1, 0]</td>
      <td>[0, 1]</td>
      <td>[1, 0]</td>
    </tr>
    <tr>
      <th>2</th>
      <td>[0, 1]</td>
      <td>[1, 0]</td>
      <td>[1, 0]</td>
    </tr>
    <tr>
      <th>3</th>
      <td>[0, 1]</td>
      <td>[0, 1]</td>
      <td>[0, 1]</td>
    </tr>
  </tbody>
</table>
</div>



Truth table for $\land$:

| First  | Second | Result |
|--------|--------|--------|
| $\top$ | $\top$ | $\top$ |
| $\top$ | $\bot$ | $\bot$ |
| $\bot$ | $\top$ | $\bot$ |
| $\bot$ | $\bot$ | $\bot$ |


```python
pd.DataFrame(truth_table(a))
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>first</th>
      <th>second</th>
      <th>result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>[1, 0]</td>
      <td>[1, 0]</td>
      <td>[1, 0]</td>
    </tr>
    <tr>
      <th>1</th>
      <td>[1, 0]</td>
      <td>[0, 1]</td>
      <td>[0, 1]</td>
    </tr>
    <tr>
      <th>2</th>
      <td>[0, 1]</td>
      <td>[1, 0]</td>
      <td>[0, 1]</td>
    </tr>
    <tr>
      <th>3</th>
      <td>[0, 1]</td>
      <td>[0, 1]</td>
      <td>[0, 1]</td>
    </tr>
  </tbody>
</table>
</div>



Truth table for $\to$:

| First  | Second | Result |
|--------|--------|--------|
| $\top$ | $\top$ | $\top$ |
| $\top$ | $\bot$ | $\bot$ |
| $\bot$ | $\top$ | $\top$ |
| $\bot$ | $\bot$ | $\top$ |


```python
pd.DataFrame(truth_table(c))
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>first</th>
      <th>second</th>
      <th>result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>[1, 0]</td>
      <td>[1, 0]</td>
      <td>[1, 0]</td>
    </tr>
    <tr>
      <th>1</th>
      <td>[1, 0]</td>
      <td>[0, 1]</td>
      <td>[0, 1]</td>
    </tr>
    <tr>
      <th>2</th>
      <td>[0, 1]</td>
      <td>[1, 0]</td>
      <td>[1, 0]</td>
    </tr>
    <tr>
      <th>3</th>
      <td>[0, 1]</td>
      <td>[0, 1]</td>
      <td>[1, 0]</td>
    </tr>
  </tbody>
</table>
</div>



Not only do the truth tables fit with standard first-order logic, but it also becomes possible to compose logical operators out of the primitives. For example, we could also have defined the conditional using just or and negation: $\neg X \lor Y \equiv X \to Y$


```python
c2 = lambda x, y: o(n(x), y)
pd.DataFrame(truth_table(c2))
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>first</th>
      <th>second</th>
      <th>result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>[1, 0]</td>
      <td>[1, 0]</td>
      <td>[1, 0]</td>
    </tr>
    <tr>
      <th>1</th>
      <td>[1, 0]</td>
      <td>[0, 1]</td>
      <td>[0, 1]</td>
    </tr>
    <tr>
      <th>2</th>
      <td>[0, 1]</td>
      <td>[1, 0]</td>
      <td>[1, 0]</td>
    </tr>
    <tr>
      <th>3</th>
      <td>[0, 1]</td>
      <td>[0, 1]</td>
      <td>[1, 0]</td>
    </tr>
  </tbody>
</table>
</div>



In this way we can also introduce new logical operators such as the exclusive or, which returns true exactly if it receives a truth and a false value.


```python
xor = lambda x, y: a(o(x, y), o(n(x), n(y)))
```


```python
pd.DataFrame(truth_table(xor))
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>first</th>
      <th>second</th>
      <th>result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>[1, 0]</td>
      <td>[1, 0]</td>
      <td>[0, 1]</td>
    </tr>
    <tr>
      <th>1</th>
      <td>[1, 0]</td>
      <td>[0, 1]</td>
      <td>[1, 0]</td>
    </tr>
    <tr>
      <th>2</th>
      <td>[0, 1]</td>
      <td>[1, 0]</td>
      <td>[1, 0]</td>
    </tr>
    <tr>
      <th>3</th>
      <td>[0, 1]</td>
      <td>[0, 1]</td>
      <td>[0, 1]</td>
    </tr>
  </tbody>
</table>
</div>



## Quantifiers and Non-Linearity

So far we have operated with a quantifier-free fragment of first order logic. To simulate quantifiers, Grefenstette offers a second take on predicates. When we modelled the predicate "is a mathematician" before, we treated it as a function from domain elements to truth values. Now it will be instead a function from objects in the domain to objects in the domain, i.e. $f_p: \mathcal{P(D)} \to \mathcal{P(D)}$.
  
Let's represent the set of dogs as the vector $\begin{bmatrix}1 & 1 & 0\end{bmatrix}^\top$, which roughly means that the first two objects in the domain are dogs. The predicate "is a dog" is then represented by the tensor $\begin{bmatrix}1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{bmatrix}$ in  $\mathcal{D} \otimes \mathcal{D}$.


```python
dogs = np.array([1, 1, 0])
```


```python
isdog = np.array([[1, 0, 0],
                  [0, 1, 0],
                  [0, 0, 0]])
```

When we multiply the predicate tensor of "is a dog" with the vector representing all entities in the domain, i.e. $\begin{bmatrix}1 & 1 & 1\end{bmatrix}^\top$, we get back the set of dogs.


```python
entities = np.ones(3, dtype=int)
```


```python
np.matmul(isdog, entities)
```




    array([1, 1, 0])



On this basis, we can introduce further predicate tensors, for example the predicates "is brown" and "is black", which we then apply to dogs to see whether any dogs are brown or black.


```python
brown = np.array([[0, 0, 0],
                  [0, 1, 0],
                  [0, 0, 1]])
```


```python
np.matmul(brown, dogs)
```




    array([0, 1, 0])



This result indicates that the second dog is brown.


```python
black = np.array([[1, 0, 0],
                  [0, 0, 0],
                  [0, 0, 0]])
np.matmul(black, dogs)
```




    array([1, 0, 0])




```python
cats = np.array([0, 0, 1])
iscat = np.array([[0, 0, 0],
                  [0, 0, 0],
                  [0, 0, 1]])
np.matmul(iscat, entities)
```




    array([0, 0, 1])




```python
np.matmul(brown, cats), np.matmul(black, cats)
```




    (array([0, 0, 1]), array([0, 0, 0]))



In our domain, there is one brown and no black cat.

While we no have predicates that return extension, we still have not introduced general quantifiers. In contrast to all we have encountered so far, Grefenstette does not represent them as tensors. He instead provides functions for them and proves that these functions cannot be represented as tensors. (I won't go into the proof here, although it is relatively straightforward.)

The $forall$ quantifier takes two predicate tensors and returns true if all objects in the extension of the first predicate are in the extension of the second. Formally,
$forall(\pmb{\text{X,Y}}) = 
\begin{cases}
\top & \text{if}\, \pmb{\text{X}} = min(\pmb{\text{X,Y}})\\
\bot & \text{otherwise}
\end{cases}$


```python
def forall(X, Y):
    ones = np.ones(X.shape[0], dtype=int)
    
    x, y = map(lambda m: np.matmul(m, ones), (X, Y))
    
    if (x == x * y).all():
        return t
    else:
        return f
```


```python
forall(isdog, brown)
```




    array([0, 1])




```python
forall(iscat, brown)
```




    array([1, 0])



Note that the order of predicates matters. While all cats in our domain are brown, not all brown objects are cats.


```python
forall(brown, iscat)
```




    array([0, 1])



Grefenstette also introduces an existential quantifier, which simply checks whether there is an object in the extension of the tensor, i.e. if it is ever not 0. 

$exists(\pmb{\text{X}}) = 
\begin{cases}
\top & \text{if}\, |\pmb{\text{X}}| > 0 \\
\bot & \text{otherwise}
\end{cases}$


```python
def exists(X):
    if np.any(X != 0):
        return t
    else:
        return f
```


```python
exists(cats), exists(iscat)
```




    (array([1, 0]), array([1, 0]))




```python
exists(np.matmul(iscat, brown))
```




    array([1, 0])




```python
exists(np.matmul(iscat, black))
```




    array([0, 1])




```python
exists(np.matmul(isdog, black))
```




    array([1, 0])



Importantly, we can still use logical connectives. For example, we can get the truth value of the following sentence: 

"There is a black cat or there is a brown dog."


```python
o(exists(np.matmul(iscat, black)), exists(np.matmul(isdog, brown)))
```




    array([1, 0])



"There is a black cat and a brown dog."


```python
a(exists(np.matmul(iscat, black)), exists(np.matmul(isdog, brown)))
```




    array([0, 1])



"There is no black cat and there is a brown dog."


```python
a(n(exists(np.matmul(iscat, black))), exists(np.matmul(isdog, brown)))
```




    array([1, 0])



We can take from Grefenstette's paper that the chasm between tensors and logical calculus can be bridged. That being said, there remains a large gap between simulating logical with manually created tensors for small domains and with the tensors that result from counting co-occurences or even neural embeddings. 

## References

- Coecke, B., Sadrzadeh, M., & Clark, S. (2010). Mathematical Foundations for a Compositional Distributed Model of Meaning. *Lambek Festschrift Linguistic Analysis*, 36, 345–384.
- Grefenstette, E. (2013). Towards a Formal Distributional Semantics: Simulating Logical Calculi with Tensors. *Second Joint Conference on Lexical and Computational Semantics (\*SEM), Volume 1: Proceedings of the Main Conference and the Shared Task: Semantic Textual Similarity*, 1–10. https://www.aclweb.org/anthology/S13-1001
