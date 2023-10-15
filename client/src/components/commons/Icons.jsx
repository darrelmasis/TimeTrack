/**
 * 
 */
import React, { Fragment } from "react";

class Icon {
  constructor(viewBox, svg) {
    this.viewBox = viewBox;
    this.svg = <Fragment>{svg}</Fragment>;
  }
}


const svgsIcons = {
  // Para este ejemplo usaremos tres íconos de redes sociales
  "eye": new Icon(
    "0 0 576 512",
    (
      <path d="M288 80q-49 1 -89 20v0q-40 18 -71 48q-29 27 -49 56q-19 29 -30 52q11 23 30 52q20 29 49 56q31 30 71 48q40 19 89 20q49 -1 89 -20q40 -18 71 -48q29 -27 49 -56q19 -29 30 -52q-11 -23 -30 -52q-20 -29 -49 -56q-31 -30 -71 -48q-40 -19 -89 -20v0zM95 113 q36 -34 84 -57v0q48 -23 109 -24q61 1 109 24t84 57q35 33 58 68t35 63q5 12 0 24q-12 28 -35 63t-58 68q-36 34 -84 57t-109 24q-61 -1 -109 -24t-84 -57q-35 -33 -58 -68t-34 -63q-5 -12 0 -24q11 -28 34 -63t58 -68v0zM288 336q34 -1 57 -23v0q22 -23 23 -57 q-1 -34 -23 -57q-23 -22 -57 -23h-1h-1q2 8 2 16q-1 27 -19 45t-45 19q-8 0 -16 -2v1v1q1 34 23 57q23 22 57 23v0zM288 128q35 0 64 17v0q29 17 47 47q17 30 17 64t-17 64q-18 30 -47 47t-64 17t-64 -17t-47 -47q-17 -30 -17 -64t17 -64q18 -30 47 -47t64 -17v0z" />
    )
  ),
  "eye-slash": new Icon(
    "0 0 640 512",
    (
      <path d="M39 5q-19 -12 -34 4q-12 19 4 34l592 464q19 12 34 -4q12 -19 -4 -34l-105 -82q29 -31 49 -63q20 -31 31 -56q4 -12 0 -24q-12 -28 -35 -63t-58 -68q-36 -34 -84 -57t-109 -24q-51 1 -94 17q-42 17 -75 44l-112 -88v0zM190 123q54 -41 130 -43q49 1 89 20q40 18 71 48 q29 27 49 56q19 29 30 52q-10 21 -28 48t-43 53l-54 -42q14 -27 14 -59q-1 -54 -37 -91q-37 -36 -91 -37q-49 1 -84 31l-46 -36v0zM395 284l-82 -64q7 -13 7 -28q0 -8 -2 -16h2q34 1 57 23q22 23 23 57q0 15 -5 28v0zM404 415q-38 16 -84 17q-49 -1 -89 -20q-40 -18 -71 -48 q-29 -27 -49 -56q-19 -29 -30 -52q13 -29 40 -65l-38 -29q-34 46 -48 82q-5 12 0 24q11 28 34 63t59 68q35 34 83 57t109 24q72 -2 126 -32l-42 -33v0zM192 256q1 54 37 91v0q37 36 91 37q20 0 38 -6l-56 -44q-37 -9 -54 -42l-56 -44v8v0z" />
    )
  ),
  "circle-user": new Icon(
  "0 0 532 512",
  (
    <path d="M407 400q-15 -36 -47 -58v0q-31 -21 -72 -22h-64q-41 1 -72 22q-32 22 -46 58q-56 -58 -58 -144q2 -88 61 -147t147 -61q88 2 147 61t61 147q-2 86 -57 144v0zM366 432q-48 31 -110 32q-62 -1 -110 -32q6 -28 27 -46q21 -17 51 -18h64q30 1 51 18q21 18 28 46h-1z M256 512q70 -1 128 -34v0q58 -34 94 -94q34 -61 34 -128t-34 -128q-36 -60 -94 -94q-58 -33 -128 -34q-70 1 -128 34q-58 34 -94 94q-34 61 -34 128t34 128q36 60 94 94q58 33 128 34v0zM256 240q-23 -1 -35 -20q-10 -20 0 -40q12 -19 35 -20q23 1 35 20q10 20 0 40 q-12 19 -35 20v0zM168 200q2 50 44 76q44 24 88 0q42 -26 44 -76q-2 -50 -44 -76q-44 -24 -88 0q-42 26 -44 76v0z" />
  )
  ),
  "gears": new Icon(
  "0 0 522 512",
  (
    <path d="M256 0q26 0 50 5q6 1 15 5q8 5 14 15q3 5 5 12l9 38q2 5 7 8t10 2l38 -11q6 -2 12 -2q12 0 20 5q9 5 13 10q33 38 49 87q3 6 3 15q1 10 -5 20l-8 10l-29 27q-3 4 -3 10t3 10l29 27l8 10q5 11 5 20q0 10 -3 15q-16 49 -49 87q-4 5 -13 10q-8 5 -20 5q-6 0 -12 -2l-38 -11 q-5 -1 -10 2t-7 8l-9 38q-2 7 -5 12q-6 10 -14 15q-9 4 -15 5q-24 5 -50 5t-50 -5q-6 -1 -15 -5q-8 -5 -14 -15q-3 -5 -5 -12l-9 -38q-2 -5 -7 -8t-10 -2l-38 11q-6 2 -12 2q-12 0 -20 -5q-9 -5 -12 -10q-34 -38 -50 -87q-3 -6 -3 -15q-1 -10 5 -20l8 -10l29 -27q3 -4 3 -10 t-3 -10l-29 -27l-8 -10q-6 -11 -5 -20q0 -10 3 -15q16 -48 50 -87q3 -5 12 -10q8 -5 20 -5q6 0 12 2l38 11q5 1 10 -2t7 -8l9 -38q2 -7 5 -12q6 -10 14 -15q9 -4 15 -5q24 -5 50 -5v0zM218 51l-8 36q-7 24 -30 37t-48 7l-34 -10q-25 29 -38 66l26 25q18 18 18 44t-18 45 l-26 24q13 37 38 66l35 -10q24 -7 47 7q23 13 30 37l8 36q38 6 76 0l9 -36q7 -24 29 -37q23 -13 48 -7l34 10q25 -29 38 -66l-26 -25q-18 -18 -18 -44t18 -45l26 -24q-13 -37 -38 -66l-34 10q-25 7 -48 -7q-22 -13 -29 -38l-9 -35q-38 -6 -76 0v0zM208 256q1 27 24 42 q24 12 48 0q23 -15 24 -42q-1 -27 -24 -42q-24 -12 -48 0q-23 15 -24 42v0zM256 352q-26 0 -48 -13v0q-22 -13 -35 -35q-13 -23 -13 -48t13 -48q13 -22 35 -35t48 -13t48 13t35 35q13 23 13 48t-13 48q-13 22 -35 35t-48 13v0z" />
  )
  ),
  "logout": new Icon(
  "0 0 532 512",
  (
    <path d="M505 273q14 -17 0 -34l-128 -128q-17 -14 -34 0q-14 17 0 34l87 87h-246q-22 2 -24 24q2 22 24 24h246l-87 87q-14 17 0 34q17 14 34 0l128 -128v0zM168 80q22 -2 24 -24q-2 -22 -24 -24h-80q-37 1 -62 26t-26 62v272q1 37 26 62t62 26h80q22 -2 24 -24q-2 -22 -24 -24 h-80q-17 0 -28 -12q-12 -11 -12 -28v-272q0 -17 12 -28q11 -12 28 -12h80v0z" />
  )
  ),
  "theme": new Icon(
  "0 0 532 512",
  (
    <path d="M464 256q-2 -88 -61 -147v0q-59 -59 -147 -61v416q88 -2 147 -61t61 -147v0zM0 256q1 -70 34 -128v0q34 -58 94 -94q61 -34 128 -34t128 34q60 36 94 94q33 58 34 128q-1 70 -34 128q-34 58 -94 94q-61 34 -128 34t-128 -34q-60 -36 -94 -94q-33 -58 -34 -128v0z" />
  )
  ),
  "arrow-left": new Icon(
  "0 0 468 512",
  (
    <path d="M7 273q-7 -7 -7 -17t7 -17l176 -168q18 -14 34 0q14 18 -1 34l-132 127h340q22 2 24 24q-2 22 -24 24h-340l133 127q14 16 0 34q-16 14 -33 0l-176 -168h-1z" />
  )
  ),
  "arrow-right": new Icon(
  "0 0 468 512",
  (
    <path d="M441 273q7 -7 7 -17t-7 -17l-176 -168q-18 -14 -34 0q-14 18 1 34l132 127h-340q-22 2 -24 24q2 22 24 24h340l-133 127q-14 16 0 34q16 14 34 0l176 -168v0z" />
  )
  ),
  "arrow-right-to-bracket": new Icon(
  "0 0 512 512",
  (
    <path d="M217 401l128 -128q14 -17 0 -34l-128 -128q-17 -14 -34 0q-14 17 0 34l87 87h-246q-22 2 -24 24q2 22 24 24h246l-87 87q-14 17 0 34q17 14 34 0v0zM344 80h80q17 0 28 12q12 11 12 28v272q0 17 -12 28q-11 12 -28 12h-80q-22 2 -24 24q2 22 24 24h80q37 -1 62 -26 t26 -62v-272q-1 -37 -26 -62t-62 -26h-80q-22 2 -24 24q2 22 24 24v0z" />
  )
  ),
  "arrow-right-from-bracket": new Icon(
  "0 0 512 512",
  (
    <path d="M505 273q14 -17 0 -34l-128 -128q-17 -14 -34 0q-14 17 0 34l87 87h-246q-22 2 -24 24q2 22 24 24h246l-87 87q-14 17 0 34q17 14 34 0l128 -128v0zM168 80q22 -2 24 -24q-2 -22 -24 -24h-80q-37 1 -62 26t-26 62v272q1 37 26 62t62 26h80q22 -2 24 -24q-2 -22 -24 -24 h-80q-17 0 -28 -12q-12 -11 -12 -28v-272q0 -17 12 -28q11 -12 28 -12h80v0z" />

  )
  ),
  "x-mark": new Icon(
  "0 0 384 512",
  (
    <path d="M345 137q14 -17 0 -34q-17 -14 -34 0l-119 119l-119 -119q-17 -14 -34 0q-14 17 0 34l119 119l-119 119q-14 17 0 34q17 14 34 0l119 -119l119 119q17 14 34 0q14 -17 0 -34l-119 -119l119 -119v0z" />

  )
  ),
  "ellipsis-vertical": new Icon(
  "0 0 138 512",
  (
    <path d="M64 368q-27 1 -42 24q-12 24 0 48q15 23 42 24q27 -1 42 -24q12 -24 0 -48q-15 -23 -42 -24v0zM64 208q-27 1 -42 24q-12 24 0 48q15 23 42 24q27 -1 42 -24q12 -24 0 -48q-15 -23 -42 -24v0zM112 96q-1 -27 -24 -42q-24 -12 -48 0q-23 15 -24 42q1 27 24 42q24 12 48 0 q23 -15 24 -42v0z" />
  )
  ),
  "pen-to-square": new Icon(
  "0 0 528 512",
  (
    <path d="M441 59l12 12q14 17 0 34l-29 29l-46 -46l29 -29q17 -14 34 0v0zM210 256l134 -134l46 46l-134 134q-5 5 -11 6l-58 17l17 -58q1 -6 6 -11v0zM373 25l-197 197q-13 14 -18 31l-29 100q-4 14 6 24q10 9 24 6l100 -29q18 -5 31 -18l197 -197q21 -22 21 -51t-21 -51l-12 -12 q-22 -21 -51 -21t-51 21v0zM88 64q-37 1 -62 26v0q-25 25 -26 62v272q1 37 26 62t62 26h272q37 -1 62 -26t26 -62v-112q-2 -22 -24 -24q-22 2 -24 24v112q0 17 -12 28q-11 12 -28 12h-272q-17 0 -28 -12q-12 -11 -12 -28v-272q0 -17 12 -28q11 -12 28 -12h112q22 -2 24 -24 q-2 -22 -24 -24h-112v0z" />
  )
  ),
  "trash-can": new Icon(
  "0 0 468 512",
  (
    <path d="M171 52l-19 28h145l-19 -28q-3 -4 -7 -4h-94q-4 0 -7 4h1zM318 25l36 55h14h48h8q22 2 24 24q-2 22 -24 24h-8v304q-1 34 -23 57q-23 22 -57 23h-224q-34 -1 -57 -23q-22 -23 -23 -57v-304h-8q-22 -2 -24 -24q2 -22 24 -24h8h48h14l37 -55q17 -24 46 -25h94q29 1 46 25h1 zM80 128v304q0 14 9 23t23 9h224q14 0 23 -9t9 -23v-304h-288v0zM160 192v208q-1 15 -16 16q-15 -1 -16 -16v-208q1 -15 16 -16q15 1 16 16v0zM240 192v208q-1 15 -16 16q-15 -1 -16 -16v-208q1 -15 16 -16q15 1 16 16v0zM320 192v208q-1 15 -16 16q-15 -1 -16 -16v-208 q1 -15 16 -16q15 1 16 16v0z" />
  )
  ),
  "plus": new Icon(
  "0 0 458 512",
  (
    <path d="M248 72q-2 -22 -24 -24q-22 2 -24 24v160h-160q-22 2 -24 24q2 22 24 24h160v160q2 22 24 24q22 -2 24 -24v-160h160q22 -2 24 -24q-2 -22 -24 -24h-160v-160v0z" />
  )
  ),
  
  
  
  
  // Muy importante agregar un valor por default que regrese null
  // para evitar problemas por si llegamos a escribir mal el nombre de un ícono
  "default": {
    viewBox: "0 0 414 512",
    svg: <path d="M48 422l115 -166l-115 -166v332v0zM77 464h230l-115 -166l-115 166v0zM221 256l115 166v-332l-115 166v0zM307 48h-230l115 166l115 -166v0zM0 48q1 -20 14 -34v0q14 -13 34 -14h288q20 1 34 14q13 14 14 34v416q-1 20 -14 34q-14 13 -34 14h-288q-20 -1 -34 -14 q-13 -14 -14 -34v-416v0z" />
    }
};


  
export default  Icon = ({ icon, classes, fixedWidth }) => {
    
    const svgRender = svgsIcons[icon] || svgsIcons.default;
    
    return (
    <svg
    viewBox={svgRender.viewBox}
    className={`icon ${classes} ${fixedWidth ? 'icon-fixed-width' : null}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {svgRender.svg}
    </svg>
  );
};

// puedes llamar al componente Icon de la siguiente manera
// <Icon icon="nombre-del-icono" classes="clase-1 clase-2" [fixedWidth]/>
// la props fixedWidth es opcional


