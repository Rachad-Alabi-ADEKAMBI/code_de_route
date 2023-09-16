<template>

<header class="header">
      <div class="header__btn"  id="btn"
      onclick="displayLeft()">
        <i class="fas fa-bars"></i>
      </div>

      <div class="header__logo" id="header__logo">
        <a href="/">
            CODE
        </a>
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
            <li>
              <router-link to="/hero" class="link">
                <a href="#hero" id="link_hero" >
                  Intro <i class="bi bi-dot" id="link_hero_dot"></i>
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/red" class="link">
                <a href="#red" id="link_red">
                  C'est quoi ? <i class="bi bi-dot" id="link_red_dot"></i>
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/steps" class="link">
                <a href="#steps" data-section="steps" id="link_steps" >
                  Comment <i class="bi bi-dot" id="link_steps_dot"></i>
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/testimonies" class="link" >
                <a href="#testimonies" data-section="testimonies"
                 id="link_testimonies" >
                  Avis <i class="bi bi-dot" id="link_testimonies_dot" ></i>
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/register" class="link">
                <a href=""  data-section="register" >
                  Connexion <i class="bi bi-dot"></i>
                </a>
              </router-link>
            </li>
          </ul>
      </div>
    </header>


  <router-view/>
</template>

<script></script>