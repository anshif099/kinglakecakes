import './hero.css'

const brands = [
  'TRUST',
  'Carmine County',
  'Cocoacraft',
  'Van Houten',
  'Amul',
  "Mala's",
  'Bake Mate',
  'Happy Chef',
]

const toys = ['toy-one', 'toy-two', 'toy-three', 'toy-four']
const cakeBerries = Array.from({ length: 26 }, (_, index) => `cake-berry-${index + 1}`)
const titleWords = ['FRESH', 'FIRST']

function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="toy-field" aria-hidden="true">
          {toys.map((toy) => (
            <span key={toy} className={`toy-boy ${toy}`}>
              <span className="toy-head" />
              <span className="toy-body" />
              <span className="toy-arm toy-arm-left" />
              <span className="toy-arm toy-arm-right" />
              <span className="toy-leg toy-leg-left" />
              <span className="toy-leg toy-leg-right" />
            </span>
          ))}
        </div>

        <div className="hero-kicker">Find Your Perfect Cake</div>

        <div className="hero-title-wrap">
          <h1 id="hero-title" className="hero-title">
            {titleWords.map((word) => (
              <span className="hero-word" key={word}>
                {word.split('').map((letter, index) => (
                  <span className="hero-letter" key={`${word}-${letter}-${index}`}>
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <span className="hero-sticker hero-sticker-left">Pure Ingredients</span>
          <span className="hero-sticker hero-sticker-right">Oven Fresh</span>
        </div>

        <div className="hero-copy">
          <p className="hero-lead">
            Nothing artificial, ever. Just pure ingredients and joyful flavors in every bite.
          </p>

          <div className="hero-perks" aria-label="Cake highlights">
            <div className="hero-perk hero-perk-eggless">
              <span className="perk-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48">
                  <circle cx="24" cy="25" r="12" />
                  <circle cx="24" cy="25" r="6" />
                  <path d="M12 31c-4-7-1-17 7-20" />
                  <path d="M34 13c5 4 7 12 3 18" />
                </svg>
              </span>
              <span>Eggless</span>
            </div>

            <div className="hero-perk hero-perk-homemade">
              <span className="perk-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48">
                  <path d="M12 31h24" />
                  <path d="M15 23h18" />
                  <path d="M20 13h8" />
                  <path d="M24 13v18" />
                  <circle cx="16" cy="31" r="3" />
                  <circle cx="32" cy="31" r="3" />
                </svg>
              </span>
              <span>Homemade</span>
            </div>

            <div className="hero-perk hero-perk-fresh">
              <span className="perk-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48">
                  <path d="M26 35c9-2 13-10 11-22-12-1-20 5-21 15" />
                  <path d="M17 31c-4-4-6-8-5-15 8 0 13 4 14 10" />
                  <path d="M17 35c4-8 10-14 20-20" />
                </svg>
              </span>
              <span>Fresh</span>
            </div>
          </div>

          <div className="hero-actions">
            <button className="hero-order-button" type="button">
              Order Your Cake
            </button>
            <button className="hero-phone-button" type="button" aria-label="Call us">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.25 4.75 10 7.5l-1.7 2.2c1.2 2.3 3 4.1 6 6l2.2-1.7 2.75 2.75-1.35 2.4c-.42.74-1.28 1.1-2.1.88C9.58 18.35 5.65 14.42 3.97 8.2c-.22-.82.14-1.68.88-2.1l2.4-1.35Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="hero-art">
          <div className="loose-berries" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="hero-cake" role="img" aria-label="Strawberry cake">
            <span className="real-berries-hotspot" aria-hidden="true" />
            <div className="cake-plate">
              <div className="cake-crust" />
              <div className="cake-cream" />
              <div className="cake-glaze" />
              {cakeBerries.map((berry) => (
                <span key={berry} className={`cake-berry ${berry}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="brand-strip" aria-label="Featured ingredient brands">
        <div className="brand-track">
          {[...brands, ...brands].map((brand, index) => (
            <div
              className={`brand-card brand-${index % brands.length}`}
              key={`${brand}-${index}`}
              aria-hidden={index >= brands.length}
            >
              <span className="brand-cupcake" aria-hidden="true" />
              <span>{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
