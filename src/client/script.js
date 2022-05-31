"use-strict";

import { SvgLogoFilter } from "./assets/build/components/SvgLogoFilter.js";
import { homeController } from "./assets/build/controllers/home.controller.js";

homeController();
document.body.appendChild(SvgLogoFilter());