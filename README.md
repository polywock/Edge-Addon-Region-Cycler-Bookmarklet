# Archived
### Replaced with https://github.com/polywock/all-edge-extension-reviews

|

|

|


## Edge Addon Region Cycler Bookmarklet
#### Cycle between available regions to find all reviews for an Edge addon. 

The Edge Addon store only shows reviews for a particular region. You need to change the `gl=` URL parameter to change the region. This bookmarklet when clicked will cycle to next region. Keep clicking the bookmarklet until it warns you reviews are found.
 
Useful for developers who have an Edge extension and want to find all the reviews. 


1. To create the bookmarklet, edit any existing bookmark and change the URL to the code inside `bookmarklet.js`. For name, choose `EDGECYCLE` or whatever. 
1. Open any Edge addon page. For example, [Global Speed.](https://microsoftedge.microsoft.com/addons/detail/global-speed/mjhlabbcmjflkpjknnicihkfnmbdfced) (my extension).
2. Once bookmarklet is clicked, it will either...
    - If current region has no reviews, it will cycle to next region.  
    - If current region has reviews, it will ask you if you want to cycle to next region. Click "Cancel" if you haven't read them yet. Otherwise, click "Ok" to cycle to next region. 

Warning: Don't click bookmarklet to quickly after page loaded, otherwise reviews won't have enough time to be loaded. 

https://user-images.githubusercontent.com/31208859/116351149-21a63700-a7c1-11eb-98a9-c2f8573b8e4b.mov

