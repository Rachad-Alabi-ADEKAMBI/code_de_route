<template>

<header class="header">
      <div class="header__btn"  id="btn"
      onclick="displayLeft()">
        <i class="fas fa-bars"></i>
      </div>

      <div class="header__logo" id="header__logo" onclick="displayLeft()">
        CODE
      </div>

      <div class="header__menu" id="header__menu">
        <ul>
          <li>
              <router-link to="/" class="link">Code de la route</router-link> |
          </li>

          <li>
            <router-link to="/" class="link">Auto école</router-link> |
          </li>

          <li>
            <router-link to="/" class="link">Réservation d'examen</router-link> |
          </li>
        </ul>
      </div>
      <div class="header__more nav">
  <ul>
    <li><a href="#hero" class="link" data-section="hero">Intro <i class="bi bi-dot"></i></a></li>
    <li><a href="#red" class="link" data-section="red">C'est quoi <i class="bi bi-dot"></i></a></li>
    <li><a href="#steps" class="link" data-section="steps">Comment <i class="bi bi-dot"></i></a></li>
    <li><a href="#testimonies" class="link" data-section="testimonies">Avis <i class="bi bi-dot"></i></a></li>
    <li><a href="#register" class="link" data-section="register">Connexion <i class="bi bi-dot"></i></a></li>
  </ul>
</div>


      </header>
  <router-view/>
</template>

<script></script>