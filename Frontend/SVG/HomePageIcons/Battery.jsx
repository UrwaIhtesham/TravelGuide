import * as React from "react"
import Svg, { G, Path, Defs, Pattern, Use, Image } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Battery = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={70}
    height={70}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path fill="url(#b)" d="M0 0h50v50H0z" shapeRendering="crispEdges" />
    </G>
    <Defs>
      <Pattern
        id="b"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#c" transform="scale(.01)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABQFJREFUeAHtnD1LJEEQhv0Dx11692+cFS/2M1HBD9DgckFMFkXRVEVREEzkDi6+0K/AQCM10B9wiQpiICqYzFFiLcvedE3vblfP1PIeDL12j91vvc9U1brKdXXhHxyAA3AADsABOAAH4AAcgANwAA7UHOju7v6eJMnvkBftWTsAL5pzoFKp/EiSJA150Z7NqcDdNQcApGZFOV4AiBKHJEmqLV5/Qparj71oz5b0KNkTf1sFU4P2FV998Z1TOtE34LLfp2RP/G3LbrSvvvjOKZ3oG3DZ71OyJ/62ZTfaV19855RO9A247Pcp2RN/27Ib7asvvnNKJ/oGXPb7lOyJv23ZjfbVF985pRN9Ay77fUr2xN+27Eb76ovvnNKJvgGX/T4le+JvW3ajffXFd07pRN+Ay36fkj3xty3K6Onp6aCfCsd3TunEIoDMz8+n1WoVQLKYxgbS19eX3t3dpSMjIwBSBiAHBwfpw8NDWqlUAKRoIFSq3t7e0rOzs6AwKMuzYjM5F6tkcakiIPv7+wDielpiATk8PHzPDgISuqEjQ5r8AzkCQCD4Ct3QAaQJIP39/en9/X0NxuPjY/CGDiBNAKkvVZQhGg0dQDyBLCws1DKDy5VGQwcQDyCNpYqBaDR0APEAcnR09F92EBSNhg4gOUAWFxczYWg1dAARgAwNDb1/NMIlqn7UaugAIgA5Pj7OzA4Co9XQAcQBZGlpyQmDgGg1dADJACKVKi5bWg0dQDKASKWKgGg2dABpALK8vCyWKgJyfn4e/BNeAsGX68NTc/McUKvj4OCg810VlyoaNRs6aTdnvEtwqyD4+05OTnKzg4BoNnQA+SgVKysrXjAIiGZDB5AkSX1LVX3Z8nn9+vqazszM1HoDZ2Le6KoA5ubzAnWtn56eemeHDwi+Z3d3t2kYpNGc8S7BLsOl+dXVVRUYNzc3aW9vL4BI5jeu+fwAyE97M+PLy0s6NTXVEgzS6HrgzM03Gp739cDAwHuNpzqfd83NzXlnUqulivWaM94lmAPSGPnvsPIypZ1Sxbpd8Zmb54A0xr29vdwMoVI1OTnZcqli3eaMdwnmgDRGn3diOzs7bcMg7a74zM1rgOA9b29vxQwJUar4LHPGuwRzQKHH4eFhEcbz83OQUsW6XfGZm+eAQo95DX17eztIqWLd5ox3CeaAQo9SQ7++vm75B0CXTld85uZdAbY772roVKomJiaCZgdpNWe8S3C7xru+39XQt7a2gsMAkLrf1GUBcTX0q6urtKenB0Bc2UHzWYa2O5fV0LVKFWuVYjS1xgGFHLMa+ubmpkpmsG5TpktiOaCQY2NDv7y8VCtVrFuK0dQaBxRyrG/oVKrGx8dVs4O0mzJdEhsSBO3V2NA3NjbUYQCI8C6rvqHHKFX8QEkPnak1DijUyA396ekpHRsbi5IdyBAhQ7ihr6+vR4MBIAIQaugXFxfq76oaM9pUWZLENgbWztfU0KlUjY6ORs0OZIgjQ6ihr62tRYcBIA4gs7OzKv8pgE/WSlXA1JpPsBbuMWW6JNaC2T4apRhNrfkEa+EeU6ZLYi2Y7aNRitHU2q9vX9JOuEyZLok9/9SVdsIlxWhqrRNgUAymTJfEAojkTgFrAFKA6dKRACK5U8AagBRgunQkgEjuFLAGIAWYLh0JIJI7Baz9/Pr5bydcBViHI+EAHIADcAAOwAE4AAfgAByAA+oO/AO4ByHbSAFxKQAAAABJRU5ErkJggg=="
        id="c"
        width={90}
        height={90}
      />
    </Defs>
  </Svg>
)
export default Battery;