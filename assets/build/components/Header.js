"use-strict";

import { Nav } from "./Nav.js";

export function Header(fill, title) {
  let header = document.querySelector("header");
  header.innerHTML = "";
  let fragment = new DocumentFragment();
  let color = "#181818";
  fill == true ? color = "#EBEAEC" : null;
  const logo = `
    <svg xmlns="http://www.w3.org/2000/svg" width="12rem" height="12rem" viewBox="0 0 224 211">
        <path id="Sélection" fill="${color}" stroke="none" stroke-width="1" d="M 0.00,179.00
          C 0.00,179.00 19.00,179.64 19.00,179.64
            32.33,178.00 46.80,166.18 54.79,156.00
            57.17,152.97 65.96,141.00 64.59,137.31
            63.61,134.67 55.67,133.62 53.00,132.80
            41.42,129.24 36.16,121.52 42.41,110.00
            43.92,107.24 45.77,105.32 47.85,103.01
            52.76,97.54 56.05,93.75 64.00,95.53
            68.07,96.44 77.10,101.23 80.79,99.68
            83.22,98.66 84.58,95.26 85.58,93.00
            85.58,93.00 92.69,77.00 92.69,77.00
            92.69,77.00 114.96,23.00 114.96,23.00
            117.63,13.88 113.24,5.22 121.05,2.34
            131.67,-1.57 138.01,4.53 145.00,6.78
            149.57,8.25 152.94,7.42 155.78,12.06
            158.07,15.80 159.37,23.57 160.47,28.00
            160.47,28.00 169.02,58.00 169.02,58.00
            178.55,88.65 189.77,118.26 201.80,148.00
            201.80,148.00 217.31,183.00 217.31,183.00
            219.76,188.35 223.59,193.04 220.43,198.99
            215.78,207.73 206.29,209.87 200.47,200.96
            200.47,200.96 175.00,149.00 175.00,149.00
            176.33,157.60 180.14,164.26 183.69,172.00
            183.69,172.00 193.31,193.00 193.31,193.00
            196.58,198.95 200.04,202.28 202.00,209.00
            193.44,210.93 188.47,202.40 184.60,196.00
            177.12,183.63 173.37,175.11 167.72,162.00
            166.41,158.95 161.94,147.05 160.30,145.40
            157.92,143.01 154.86,144.20 152.00,144.87
            145.63,146.35 141.55,146.99 135.00,147.00
            135.00,147.00 116.00,146.04 116.00,146.04
            113.22,145.92 109.65,145.76 107.39,147.60
            105.00,149.55 101.53,159.42 99.75,163.00
            94.82,172.94 88.76,183.60 81.39,191.91
            65.82,209.44 38.87,210.03 19.00,200.24
            9.58,195.60 0.65,190.57 0.00,179.00 Z
          M 128.00,55.00
          C 125.31,59.14 120.72,70.28 122.00,75.00
            126.08,67.80 127.82,63.35 128.00,55.00 Z
          M 155.00,68.00
          C 155.00,68.00 154.00,68.00 154.00,68.00
            154.00,68.00 155.00,69.00 155.00,69.00
            155.00,69.00 155.00,68.00 155.00,68.00 Z
          M 153.00,71.00
          C 153.00,71.00 152.00,71.00 152.00,71.00
            152.00,71.00 153.00,72.00 153.00,72.00
            153.00,72.00 153.00,71.00 153.00,71.00 Z
          M 135.00,72.00
          C 135.00,72.00 128.00,86.00 128.00,86.00
            128.00,86.00 118.00,113.00 118.00,113.00
            127.96,114.34 139.08,117.41 149.00,115.00
            144.42,103.56 137.38,83.81 135.00,72.00 Z
          M 112.00,81.00
          C 112.00,81.00 111.00,81.00 111.00,81.00
            111.00,81.00 112.00,82.00 112.00,82.00
            112.00,82.00 112.00,81.00 112.00,81.00 Z
          M 159.00,85.00
          C 159.00,85.00 156.00,88.00 156.00,88.00
            156.00,88.00 159.00,85.00 159.00,85.00 Z
          M 159.00,92.00
          C 159.00,92.00 158.00,92.00 158.00,92.00
            158.00,92.00 159.00,93.00 159.00,93.00
            159.00,93.00 159.00,92.00 159.00,92.00 Z
          M 108.00,95.00
          C 108.00,95.00 107.00,95.00 107.00,95.00
            107.00,95.00 108.00,96.00 108.00,96.00
            108.00,96.00 108.00,95.00 108.00,95.00 Z
          M 171.00,107.00
          C 171.00,107.00 170.00,107.00 170.00,107.00
            170.00,107.00 171.00,108.00 171.00,108.00
            171.00,108.00 171.00,107.00 171.00,107.00 Z
          M 67.00,118.00
          C 67.00,118.00 66.00,118.00 66.00,118.00
            66.00,118.00 67.00,119.00 67.00,119.00
            67.00,119.00 67.00,118.00 67.00,118.00 Z
          M 95.00,123.00
          C 95.00,123.00 94.00,123.00 94.00,123.00
            94.00,123.00 95.00,124.00 95.00,124.00
            95.00,124.00 95.00,123.00 95.00,123.00 Z
          M 157.00,136.00
          C 149.60,132.57 148.32,134.64 141.00,134.96
            137.02,135.13 133.79,134.50 130.00,136.00
            135.72,137.02 151.91,138.02 157.00,136.00 Z
          M 174.00,145.00
          C 174.00,145.00 173.00,145.00 173.00,145.00
            173.00,145.00 174.00,146.00 174.00,146.00
            174.00,146.00 174.00,145.00 174.00,145.00 Z
          M 79.00,148.00
          C 79.00,148.00 78.00,148.00 78.00,148.00
            78.00,148.00 79.00,149.00 79.00,149.00
            79.00,149.00 79.00,148.00 79.00,148.00 Z
          M 185.00,149.00
          C 185.00,149.00 184.00,149.00 184.00,149.00
            184.00,149.00 185.00,150.00 185.00,150.00
            185.00,150.00 185.00,149.00 185.00,149.00 Z
          M 191.00,153.00
          C 191.00,153.00 190.00,153.00 190.00,153.00
            190.00,153.00 191.00,154.00 191.00,154.00
            191.00,154.00 191.00,153.00 191.00,153.00 Z
          M 88.00,158.00
          C 88.00,158.00 87.00,158.00 87.00,158.00
            87.00,158.00 88.00,159.00 88.00,159.00
            88.00,159.00 88.00,158.00 88.00,158.00 Z
          M 198.00,166.00
          C 198.00,166.00 197.00,166.00 197.00,166.00
            197.00,166.00 198.00,167.00 198.00,167.00
            198.00,167.00 198.00,166.00 198.00,166.00 Z" />
    </svg>`;
  const burger = `
    <svg width="72" height="83" viewBox="0 0 72 83" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M49.7857 0.802447C50.0399 0.937208 50.2651 1.1208 50.4482 1.3427C50.6314 1.56461 50.769 1.82047 50.8531 2.09563C50.9372 2.37079 50.9662 2.65984 50.9385 2.94623C50.9107 3.23262 50.8267 3.51072 50.6913 3.7646L18.7395 63.8572C18.4668 64.3701 18.0015 64.7536 17.446 64.9235C16.8905 65.0933 16.2903 65.0355 15.7774 64.7628C15.2645 64.4901 14.8809 64.0248 14.7111 63.4693C14.5413 62.9138 14.5991 62.3135 14.8718 61.8006L46.8236 1.70807C46.9583 1.45385 47.1419 1.22871 47.3638 1.04555C47.5857 0.862386 47.8416 0.724804 48.1167 0.640679C48.3919 0.556555 48.6809 0.527541 48.9673 0.5553C49.2537 0.583059 49.5318 0.667044 49.7857 0.802447V0.802447Z" fill="${color}"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M55.7857 17.8024C56.0399 17.9372 56.2651 18.1208 56.4482 18.3427C56.6314 18.5646 56.769 18.8205 56.8531 19.0956C56.9372 19.3708 56.9662 19.6598 56.9385 19.9462C56.9107 20.2326 56.8267 20.5107 56.6913 20.7646L24.7395 80.8572C24.4668 81.3701 24.0015 81.7536 23.446 81.9235C22.8905 82.0933 22.2903 82.0355 21.7774 81.7628C21.2645 81.4901 20.8809 81.0248 20.7111 80.4693C20.5413 79.9138 20.5991 79.3135 20.8718 78.8006L52.8236 18.7081C52.9583 18.4538 53.1419 18.2287 53.3638 18.0455C53.5857 17.8624 53.8416 17.7248 54.1167 17.6407C54.3919 17.5566 54.6809 17.5275 54.9673 17.5553C55.2537 17.5831 55.5318 17.667 55.7857 17.8024V17.8024Z" fill="${color}"/>
    </svg>
    `;
  let containerFlex = document.createElement("div");
  let figure = document.createElement("figure");
  let titleSection = document.createElement("h1");
  let barBurger = document.createElement("div");

  containerFlex.className = "container_flex";
  barBurger.setAttribute("id", "bar_burger");
  barBurger.innerHTML = `
    <p>Menu</p>
    ${burger}
  `;
  figure.innerHTML = logo;
  titleSection.textContent = title;
  containerFlex.append(figure, titleSection, barBurger);
  fragment.append(containerFlex, Nav())
  header.appendChild(fragment);
  console.log(Nav());

  return fragment;
}