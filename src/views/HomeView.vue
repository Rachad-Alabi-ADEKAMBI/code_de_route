<template>
    <div class="left" id="left">
      <div class="aside">
        <img src="images/human2.png" alt="">

        <div class="aside__top">
          <div class="close">
            <i class="fa-solid fa-xmark" onclick="closeLeft()" ></i>
          </div>
          <button class="btn btn-small">
              M'inscrire
          </button>
        </div>

        <div class="aside__menu">
            <ul>
              <li><a href="">Accueil</a></li>
              <li><a href="">Auto école</a></li>
              <li><a href="">Examen</a></li>
            </ul>
        </div>

        <div class="aside__links">
            <ul>
              <li><a href="">Avis</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Aide</a></li>
              <li><a href="">FAQ</a></li>
            </ul>
        </div>

        <div class="aside__stars">
            <div class="stars">
              <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-half"></i>
            </div>

            <p>
              4.7/5 basé sur 480 avis
            </p>
        </div>

        <div class="aside__more">
            <ul>
              <li><a href="">CGU</a></li>
              <li><a href="">Confidentialité</a></li>
              <li><a href="">Cookies</a></li>
            </ul>
        </div>
      </div>
    </div>

    <section class="hero section" id="hero">
        <div class="hero__content">
            <div class="hero__content__text">
                <h1>
                    Passe ton code de la route vite,
                     très bien fait !
                </h1>

                <button class="btn btn-primary"
                 >
                    Essayer gratuitement
                </button>  <br><br>

                <span>Disponible sur  <i class="fa-brands fa-apple"></i>
                  <i class="fa-brands fa-google-play"></i> </span>
            </div>

            <div class="hero__content__image">
                <div class="image" id="canvas3d">

                </div>
            </div>
        </div>

        <div class="hero__infos">
            <div class="hero__infos__info">
              <strong>7</strong> JOURS GRATUITS
            </div>

            <div class="hero__infos__info">
              <strong>93 %</strong> TAUX DE REUSSITE
            </div>

            <div class="hero__infos__info">
              <strong>950 k</strong> INSCRITS
            </div>
        </div>
      </section>

    <section class="red section" id="red">
        <div class="red__top">
            <h2>
              Obtiens <br> ton code du <br> premier coup !
            </h2>
        </div>

        <div class="red__image">
          <img src="http://127.0.0.1/codee/public/images/human1.png" alt="">
        </div>

        <div class="red__infos">
            <div class="info">
                  <div class="info__logo">
                    <i class="bi bi-check-circle"></i>
                  </div>
                  <p>
                    31 examens blancs, 1 500 questions, cours et vidéos d’apprentissage en 3D, accessibles en illimité via l’application web et mobile (iOS & Android)
                  </p>
            </div>

            <div class="info">
                  <div class="info__logo">
                    <i class="bi bi-check-circle"></i>
                  </div>
                  <p>
                    Des corrections détaillées pour apprendre
                     et réviser plus efficacement
                  </p>
            </div>

            <div class="info">
                  <div class="info__logo">
                    <i class="bi bi-check-circle"></i>
                  </div>
                  <p>
                    Une équipe disponible qui répond à vos questions
                  </p>
            </div>
        </div>

        <div class="red__infos">
            <div class="info">
                  <div class="info__logo">
                    <i class="bi bi-check-circle"></i>
                  </div>
                  <p>
                    Un mode « hors-ligne » pour réviser n’importe
                    où (dans le train, le bus, en avion, et même sur un bateau…)
                  </p>
            </div>

            <div class="info">
                  <div class="info__logo">
                    <i class="bi bi-check-circle"></i>
                  </div>
                  <p>
                    Un suivi personnalisé pour visualiser facilement ta progression
                  </p>
            </div>

            <div class="info">
                  <div class="info__logo">
                    <i class="bi bi-check-circle"></i>
                  </div>
                  <p>
                    Un algorithme intelligent pour déterminer si tu es prêt à passer l’examen final, et réussir du premier coup !
                  </p>
            </div>
        </div>
      </section>

    <section class="steps section" id="steps">
          <h2>
            Comment obtenir ton code avec l'app ?
          </h2>

          <div class="steps__list">
              <div class="step">
                    <div class="step__text">
                        <span>Step 01</span> <br>
                        <h3>
                          Inscris-toi &Entraîne-toi !
                        </h3>
                        <p>
                          Dès que ton inscription est confirmée, tu reçois un accès immédiat, par mail, à la formation en ligne et à l’application mobile. Tu profites de 7 jours d’essai offert aux cours de code
                          (puis 4.99 €/semaine, résiliable à tout moment et sans engagement).
                        </p>
                    </div>

                    <div class="step__image">
                      <img src="https://images.unsplash.com/photo-1578041262130-633307b3bfd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="">
                    </div>
              </div>

              <div class="step">
                    <div class="step__image">
                      <img src="https://images.unsplash.com/photo-1578041262130-633307b3bfd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="">
                    </div>
                    <div class="step__text">
                        <span>Step 02</span> <br>
                        <h3>
                          Pose tes questions
                        </h3>
                        <p>
                          Tu rencontres une difficulté, tu ne comprends pas une question (ou sa correction) ? Notre équipe t’accompagne et répond à toutes tes questions,
                          tout au long de ton entraînement au code de la route.
                        </p>
                    </div>
              </div>

              <div class="step">

                    <div class="step__text">
                        <span>Step 03</span> <br>
                        <h3>
                          Une progression,étape par étape
                        </h3>
                        <p>
                          À ton rythme, tu apprends et révises le code de la route. Suis ta progression et observe là où sont tes lacunes. Si besoin, notre algorithme estime si tu es prêt pour l’examen final, ou non !
                        </p>
                    </div>
                    <div class="step__image">
                      <img src="https://images.unsplash.com/photo-1578041262130-633307b3bfd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="">
                    </div>
              </div>

              <div class="step">
                <div class="step__image">
                      <img src="https://images.unsplash.com/photo-1578041262130-633307b3bfd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="">
                    </div>
                    <div class="step__text">
                        <span>Step 04</span> <br>
                        <h3>
                          Réserve ta place pour l'examen
                        </h3>
                        <p>
                          Réserve ta place à l’examen du code, sans bouger de ton canapé ! Inscris toi dans l’un des centres partenaire, La Poste ou SGS, directement depuis ton interface web ou via l'application mobile (au prix de 30 € TTC).
                        </p>
                    </div>
              </div>

              <div class="step">
                <div class="step__text">
                        <span>Step 05</span> <br>
                        <h3>
                          Obtiens ton code
                        </h3>
                        <p>
                          Rendez-vous à l’examen, à la date que tu as réservée, pour concrétiser ta formation.
                        </p>
                    </div>
                <div class="step__image">
                      <img src="https://images.unsplash.com/photo-1578041262130-633307b3bfd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="">
                    </div>
              </div>
          </div>
        </section>

    <section class="play section" id="play">
      <div class="play__video">
          <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpdmluZyUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="">
      </div>

      <div class="play__content">
          <div class="play__content__image">
            <img src="http://127.0.0.1/codee/public/images/human2.png" alt="">
          </div>

          <div class="play__content__text">
              <h2>
                Le Youtuber Mino a essayé
              </h2>

              <p>
                En 2019, MINO souhaite (enfin) passer son code de la route. Il se lance un défi : apprendre le code et réussir l’épreuve, avec seulement 7 jours de préparation. Pour ça, il a fait confiance à notre application/site web. Et tu sais quoi ? Il l'a eu, une semaine après !
              </p>
          </div>
      </div>
    </section>

    <div class="solutions" id="solutions">
        <div class="solutions__title">
            <h2>Une solution adaptée <br> à tes besoins</h2>
        </div>

        <div class="solutions__items">
            <div class="item">
                <strong>01</strong>
                <p>Passe pour la première fois ton permis B </p>
            </div> <hr>

            <div class="item">
                <strong>02</strong>
                <p>Ou le permis moto, si tu préfères. </p>
            </div> <hr>

            <div class="item">
                <strong>03</strong>
                <p>Ton permis est annulé ? Repasse ton code, rapidement ! </p>
            </div> <hr>

            <div class="item">
                <strong>04</strong>
                <p>Tu possèdes un permis étranger, et tu souhaites valider ton code de la route français. </p>
            </div> <hr>

        </div>
    </div>

    <section class="testimonies" id="testimonies">
        <div class="testimonies__content">
            <div class="testimonies__content__infos">
                <h2>
                  Excellent !
                </h2>
                <p>
                  4.7/5 basé sur <span>480 avis</span>
                </p>
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-half"></i>
                </div>

                <button class="btn btn-primary">
                  Voir tous les avis
                </button>
            </div>

            <div class="testimonies__content__details">
                <div class="btns">
                     <div class="click" @click=getTestimony1()>
                              1
                      </div>

                      <div class="click" @click=getTestimony2()>
                              2
                      </div>

                      <div class="click" @click=getTestimony3()>
                              3
                      </div>

                      <div class="click" @click=getTestimony4()>
                              4
                      </div>
                </div>

                <div class="texts">
                    <div class="text" v-if="showTestimony1">
                      <p>
                        Je recommande réellement ce site, après plus de
                        2 ans inscrite a l'auto école sans aller au code j'ai
                        découvert codelaroute.io pars hasard. Je me suis
                        donc inscrite et en 2 semaines à réviser
                        régulièrement j'ai passer mon code et je l'ai
                        obtenue du premier coup avec 37/40. Si comme
                        moi vous avez du mal à apprendre un livre
                        complet de code les cours de ce site sont bien
                        expliquer et facile à travailler. Je vous le conseil,
                        un grand merci à vous et votre équipe !
                      </p>

                      <div class="stars">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>

                      <span class="author">
                        Chartier Justine
                      </span>
                    </div>

                    <div class="text" v-if="showTestimony2">
                      <p>
                        Je tiens à vous remercier car grâce à vous j’ai
                        obtenu le code du premier coût alors que cela
                        faisait la 5ème fois que je le passais avec un autre
                        site. Je recommanderais à coup sûr votre site à
                        mon entourage.
                      </p>

                      <div class="stars">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>

                      <span class="author">
                        Chanou J
                      </span>
                    </div>

                    <div class="text" v-if="showTestimony3">
                      <p>
                        Merci grâce à vous j'ai obtenu mon code de la
                        route su 1er coup en moins d'une semaine et à 65
                        ans. Vos cours résument bien ce qu'il faut savoir
                        pour passer avec succès l'épreuve du code de la
                        route. Bravo à vous et encore merci
                      </p>

                      <div class="stars">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>

                      <span class="author">
                        Patleem
                      </span>
                    </div>

                    <div class="text" v-if="showTestimony4">
                      <p>
                        Juste pour vous dire merci pourquoi grâce à vous
                        j’ai eu mon code ! J’avais déjà révisée avec
                        d’autre site, et cela faisait 6 mois que je révisais
                        et j’avais échouée 2 fois au code, je me suis
                        inscrite mardi j’ai passée mon code le vendredi,
                        et je l’ai eu avec 3 fautes seulement, merci
                        beaucoup ! La version gratuite m’a suffit en plus !
                      </p>

                      <div class="stars">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>

                      <span class="author">
                        Boudraasefana
                      </span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="register" id="register">
        <div class="register__image">
          <img src="https://images.unsplash.com/photo-1606189934390-2b10bb7f8094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="">
        </div>

        <h2 class="register__title">
                Inscris toi maintenant
        </h2>

        <button class="btn btn-secondary">
                Essayer gratuitement
        </button>

        <div class="register__links">
            <p>Disponible aussi sur</p>
            <button class="btn btn-tertiary">
              <i class="fa-brands fa-apple"></i> App Store
            </button>
            <button class="btn btn-tertiary">
              <i class="fa-brands fa-google-play"></i> Google Store
            </button>
        </div>

        <p class="register__text">
          1500 QUESTIONS SIMILAIRES A L'EXAMEN OFFICIEL Rédigées par des professionnels de l'apprentissage du code de la route et de la sécurité routière en s'inspirant des questions de l'épreuve officielle conformes à l'examen du code. Gagnez du temps en vous préparant uniquement aux questions essentielles à votre réussite. Entraînez-vous avec nos séries de tests de code de 40 questions conformes à l'examen final. Plus besoin de passer par une auto-école. Inscrivez-vous pour obtenir une place, télécharger votre convocation et passer votre code. <br> <br>
          Après avoir obtenu le code de la route, nous vous permettons par la suite de choisir parmi les meilleures écoles de conduite agréées à côté de chez vous. Vous ne paierez alors que les heures de conduite et économiserez ainsi jusqu'à 350€*. L'apprentissage de la conduite automobile au meilleur prix, avec nos enseignants de la conduite. Cette offre s’adresse à tous ceux qui sont découragés par le permis de conduire ou qui veulent l'offrir à leurs proches.
        </p>
    </section>

    <section class="blue" id="blue">
          <div class="blue__top">
              <span>Besoin d’aide ? Contactez-nous</span>
              <h3>contact@codedelaroute.io</h3>
              <div class="contact">
                <p>Tél : +33186958720 (non surtaxé) <br>
                  Du lundi au vendredi de 10h à 20h
                </p>

                <div class="icons">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-instagram"></i>
                </div>

              </div>
          </div>

          <hr>

          <div class="blue__links">
            <ul>
              <li>
                <a href="">Cours</a>
              </li>

              <li>
                <a href="">Permis</a>
              </li>

              <li>
                <a href="">Examen</a>
              </li>

              <li>
                <a href="">Lexique</a>
              </li>

              <li>
                <a href="">Code gratuit</a>
              </li>
            </ul>
          </div>

          <p class="blue__text">
            Plus qu’une simple application, c’est un véritable accompagnement pour ton examen théorique. Avec Codedelaroute.io, tu es libre de passer l’épreuve de code du permis B dans un centre d’examen agréé, en candidat libre et en accéléré. Une fois ton diplôme en poche, tu peux préparer l’examen du permis de conduire classique, en conduite accompagnée, ou encore repasser les épreuves pratiques après une invalidation, dans l’école de conduite de ton choix. Codedelaroute.io t’assure d’excellents résultats (avec un taux de réussite de 93 %), alors qu’attends-tu ?
          </p>

          <div class="blue__menu">
              <ul>
                <li>© 2016-2023 Canopée SAS</li>
                <li> <a href="">CGU</a> </li>
                <li> <a href="">Confidentialité</a> </li>
                <li> <a href="">Cookies</a> </li>
              </ul>
          </div>
    </section>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default{
      name: 'HomeView',
      props:{
          img_url: String
      },
      data() {
      return {
        showTestimony1 : false,
        showTestimony2 : false,
        showTestimony3 : false,
        showTestimony4 : false,
      }
    },
    mounted: function() {
      this.getTestimony1();
    },
    methods: {
      getTestimony1(){
        this.showTestimony1 = true;
        this.showTestimony2 = false;
        this.showTestimony3 = false;
        this.showTestimony4 = false;
      },
      getTestimony2(){
        this.showTestimony1 =  false;
        this.showTestimony2 = true;
        this.showTestimony3 = false;
        this.showTestimony4 = false;
      },
      getTestimony3(){
        this.showTestimony1 = false;
        this.showTestimony2 = false;
        this.showTestimony3 = true;
        this.showTestimony4 = false;
      },
      getTestimony4(){
        this.showTestimony1 = false;
        this.showTestimony2 = false;
        this.showTestimony3 = false;
        this.showTestimony4 = true;
      },
      getCurrentUserId() {
        return '{{ Auth::id() }}'; // Get the current user ID using the auth helper function
      },
      format(num){
      let res = new Intl.NumberFormat('fr-FR', { maximumSignificantDigits: 3 }).format(num);
      return res;
    },
      getImgUrl(pic) {
      return "" + pic;
    },
    viewArticle(id){
      window.location.replace('/article/'+id)
    }
    }


    }
</script>
