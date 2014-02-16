#HUSZÁR
####by y-a-v-a.org 2010-2014

This project was set up to see if it was possible to animate a painting by the artist __Vilmos Huszár__ in JavaScript using mostly jQuery. The painting is called _Compositie II (schaatsenrijders)_, painted in 1917 and is owned by [Gemeente Museum Den Haag](http://www.gemeentemuseum.nl/collection/item/6847).

#### Concept

The idea was to let all skaters move one position at a time and to make a closing circle so all skaters would change position. Basically this is running a _Hamiltonian cycle_ on every skater.

Initially, I let the browser calculate all possible paths within the painting and put them in an array. Then I let the animation pop from this array to animate the skaters. Most modern browsers are able to do a heavy calculation like the Hamiltonian cycle on this amount of nodes, but especially IE versions got stuck. Since there's no real need to recalculate all paths at every request / visit, I let Node.js calculate them and add all paths to the codebase.

Originally I found a description on _StackOverflow_ showing a __Java__ class that does a recursive check on nodes to see if a Hamiltonian cycle was possible: http://stackoverflow.com/questions/5766160/enumerate-all-hamiltonian-paths#answer-7193700

#### For the curious

I rewrote the Java class to JavaScript, which is contained in the file hamiltonian.js. If you want to interact with the Hamilton JavaScript class, just call

```javascript
huszarDebugInfo()
```

from the console. A variable ```hamilton``` will refer to an instance of ```Hamilton``` and you can review some properties of it.


#### Further reading

* http://en.wikipedia.org/wiki/Hamiltonian_path_problem
* http://en.wikipedia.org/wiki/Hamiltonian_cycle


![](https://raw.github.com/y-a-v-a/huszar/master/var/skater.png)


