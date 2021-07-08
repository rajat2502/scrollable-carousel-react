# Scrollable Carousel React

This is a basic carousel built using ReactJS. It fetches images from the Unsplash API and shows them in a carousel that is scrollable using both controls and touch. For gracefully loading images, it uses a placeholder image.

**See Hosted Version [here](https://scrollable-carousel-react.netlify.app/)**

### Features

- Carousel is scrollable through **controls** as well as using **touch**.
- Shows **placeholder images** until the actual image is completely loaded in the background.
- Fetch random images as well as images related to a keyword.
- Ability to download the image.

### Technologies Used

- ReactJS (Frontend library)
- Tailwindcss (CSS Framework)
- Unsplash API
- Netlify.com (For Hosting)

### Optimizations Performed:

- **Purging unused CSS**: TailwindCSS comes with a lot of CSS and styles due to which a good amount of classes always remains unused. Using purging reduced the Gzipped CSS size from **450KB** to just **2KB** that reduced the page-load time by 0.6s.
- **Font-Display swap**: The project uses a custom font, which initially blocked the page loading time for some time, used the `font-display: swap` property to load the system font initially, and once the page is loaded then only request the Custom font.
- Used SVGs in place of PNGs/JPEGs.
- Rewritten reusable code and avoided any blocking code.

<details>
  <summary><strong>How to setup locally?</strong></summary>
 
  
- Fork and clone the repo using
```
$ git clone https://github.com/rajat2502/scrollable-carousel-react
$ cd scrollable-carousel-react
```
- Get a new API key from [https://unsplash.com/documentation](https://unsplash.com/documentation) and replace it with `REACT_APP_UNSPLASH_KEY` in `.env.example`.

- Rename the file `.env.example` to `.env`

- Install node dependencies using
```
$ yarn add
```
- Run Server at localhost using
```
$ yarn serve
```
  
</details>

### Screenshot(s)

![mediamodifier_image](https://user-images.githubusercontent.com/42200276/124787244-fa5caa80-df65-11eb-8b8d-01a99d3436cb.jpeg)

<div align="center">
  <img width="350" height="662" src="https://user-images.githubusercontent.com/42200276/124788575-1745ad80-df67-11eb-9e8d-53fa5a63f1aa.png" />
</div>
