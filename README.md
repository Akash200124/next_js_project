## what is folder structure in the nextjs_app 

layout.js - this file is a special file that is used to wrap the pages and components with a shared structure 

## routing 

1. create folder in app that folder name is a route for in website and inside this folder create page.js (file name should be anhything else )

## nested routing
just create a folder inside a folder and create page.jsx

## nested layout 
just create a file inside the folder and name it layout.js and write the same code as layout.js in the root folder

## link or anchor tag 
instace of a tag use <Link href="/">Home</Link>

## Route group  
it is a special file that is used to group the routes together that does not affect the url  like admin user auth 
group (admin)


## global css
using tailwind it is going to apply on all the page in the app

## for module.css 
create a file inside the folder and name it style.module.css
import that file in the page and to apply the css use className={style.common_header(classname)}

## image component 

import Image from 'next/image'
<Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />

if we use image tag then in src we can directly enter the name of file in public folder no need to import the images 
2. next js automatically compress the image and change into webp format 
3. we can also set the quality  default 75%and priority of image 
4. next js also supports lazy loading and show blur image when image is loading placeholder="blur"