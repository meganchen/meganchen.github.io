---
layout: post
title: Math Review of 'Mathematics of Doodling' (Ravi Vakil)
---

(<a href="http://math.stanford.edu/~vakil/files/monthly116-129-vakil.pdf">Original Text</a>)

This paper illuminates the discovery process of mathematics: how asking a simple question, finding patterns, then asking interesting follow-up questions can inspire a journey of deep mathematical exploration. Vakil surveys mathematical ideas involved when examining certain properties of neighborhoods ($N_r$): the circular nature of $N_r$ as its radius approaches infinity and that $N_r$'s volume can be written as a polynomial. <br><br>

The paper begins by examining two-dimensional shapes. Given a shape $X$ on a piece of paper, such as the letter ''M'', tightly draw a curve around it. Repeat this to draw more and more curves. <br><br>

Mathematically, the union of these curves is called a neighborhood. Another definition of a neighborhood is the set of points which are less than fixed radius away from a set. Given a shape $X$ and a constant $r \geq 0$, the ''radius $r$ neighborhood of $X$'' is

\begin{equation}
    N_r(X) = \{y: d(x,y) \leq r \textrm{ for some } x \in X\}.
    %where d(x,y) stands for "distance"
\end{equation}
  

Vakil proves that as $r$ approaches infinity, we can squeeze $N_r(X)$ between two discs which converge in size. Hence $N_r(X)$ becomes more circular.

Next, Vakil examines how the area (Area) and perimeter (Perim) of a neighborhood changes depending on $X$. If $X$ is a convex polygon, then

\begin{equation}
    \textrm{Perim}(N_r(X)) = \textrm{Perim}(X) + 2\pi r \\
\end{equation}
\begin{equation}    
    \textrm{Area}(N_r(X)) = \textrm{Area}(X) + \textrm{Perim}(X)r + \pi r^2.
\end{equation}

This result also holds for all convex shapes which are not polygons. Further, if we remove the convexity assumption, this exact formula works if we use the notion of \textit{area with multiplicity}, i.e. overlapping areas of $N_r$ count doubly. For shapes such as a figure eight or a double loop, the perimeter and area equations differ slightly. In all cases, Vakil observes that the perimeter equation is the derivative of the area equation with respect to $r$. In fact, these equations are polynomial with respect to $r$ with well-chosen coefficients. Moving to shapes in higher dimensions, this polynomial behavior holds for the volume equation of $N_r$. <br><br>

An invariant is a property that remains unchanged under some operation. The area of a two-dimensional shape is invariant if we slice it using a finite number of straight line cuts. The same is true for perimeter. The coefficients of $N_r$'s volume equation are precisely the equations for the original shape's invariants, such as ''surface area'' and ''volume''. Vakil's earlier equation for $\textrm{Perim}(N_r(X))$ and $\textrm{Area}(N_r(X))$ have coefficients that are geometric invariants of $X$. <br><br>

To start understand higher dimension geometric invariants, Vakil presents the following interpretation. Shine a ''light'' on onto the original shape. Then, take the average area (over all possible directions from which the light is shines) of its $k$-dimensional shadow and multiply it by some constant. For example, we can find the perimeter (i.e. one-dimensional invariant) of a two-dimensional shape by finding the average length of a shadow (a line segment) and multiplying by the constant $\pi$. <br><br>

In general, understanding the $k$-dimensional invariant in an $n$ dimensional space requires algebraic geometry, a branch of mathematics that uses abstract algebra to study geometric problems. In particular, understanding \textit{moduli spaces}, parametrized isomorphism classes of algebraic objects, generalizes all families of surfaces. <br><br>

Witten's conjecture gives information about the shape of moduli spaces. Vakil highlights Mirzakhani's proof of Witten's conjecture because it shares characteristics with Vakil's earlier observations about perimeter and area equations. Mirzakhani shows that volumes can be expressed as a polynomial and that the leading coefficients of the polynomial have meaning, much like how geometric invariants have meaning in Vakil's equations.