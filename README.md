#HUSZÁR
##y-a-v-a 2010-2013

This project was set up to see if it was possible to animate a painting by the artist Vilmos Huszár in JavaScript using mostly jQuery. The painting is called Compositie II (schaatsenrijders), painted in 1917 and is owned by Gemeente Museum Den Haag.

The idea was to let all skaters move one position at a time and to make a closing circle so all skaters would change position. Basically this is running a Hamiltonian cycle on every skater.

Initially, I let the browser calculate all possible paths within the painting and put them in an array. Then I let the animation pop from this array to animate the skaters. Most modern browsers are able to do a heavy calculation like the Hamiltonian cycle on this amount of nodes, but especially IE versions got stuck. Since there's no real need to recalculate all paths at every request / visit, I let Node.js calculate them and add all paths to the codebase.

Originally I found a description on StackOverflow showing a Java class that does a brute force check on nodes to see if a Hamiltonian cycle was possible: http://stackoverflow.com/questions/5766160/enumerate-all-hamiltonian-paths#answer-7193700
I rewrote this class to JavaScript.

* http://en.wikipedia.org/wiki/Hamiltonian_path_problem
* http://en.wikipedia.org/wiki/Hamiltonian_cycle


For more information about the painting, see http://www.gemeentemuseum.nl/collection/item/6847