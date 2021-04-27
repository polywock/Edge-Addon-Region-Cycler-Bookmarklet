## Edge Addon Region Cycler Bookmarklet
### Cycle between available regions to find all reviews for an Edge addon. 

The Edge Addon store only shows reviews for a particular region. You need to change the `gl=` URL parameter to change the region. This bookmarklet when clicked will cycle to next region. Keep clicking the bookmarklet until it warns you reviews are found.

Useful for developers who have an Edge extension and want to find all the reviews. 


1. To create the bookmarklet, edit any existing bookmarklet and change the URL to the code inside `bookmarklet.js`. For name, choose `EDGECYCLE` or whatever. 
1. Open any Edge addon page. For example, [Global Speed.](https://microsoftedge.microsoft.com/addons/detail/global-speed/mjhlabbcmjflkpjknnicihkfnmbdfced) (my extension).
1. Click on the bookmarklet. 
    - Note: First time you click on bookmarklet, if there's a region already selected, it will ask if you want to start from the first region. 
    - Keep clicking until it tells you it found reviews on the current region. If it did, read the reviews. Repeat until finished checking all regions.  
