import React from 'react';
import './superherolist.css'
import SuperHero from './SuperHero';
const SuperHeroItems = [
    { urlImage: 'https://comicvine1.cbsistatic.com/uploads/scale_small/12/124259/7254202-wolv2020001_silva.jpg', id: 1, name: 'Wolverine', email: 'wolwerine@super.de' },
    { urlImage: 'https://comicvine1.cbsistatic.com/uploads/scale_small/10/104700/4831078-spider-man%201.jpg', id: 2, name: 'Spider-Man', email: 'spiderman@super.de' },
    { urlImage: 'https://comicvine1.cbsistatic.com/uploads/scale_small/11139/111399535/7231595-thor2020005-cvr.jpg', id: 3, name: 'Thor', email: 'thor@super.de' },
    { urlImage: 'https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/4956367-invim2015001-maleevvar-d8a38.jpg', id: 4, name: 'Iron Man', email: 'ironman@super.de' },
    { urlImage: 'https://comicvine1.cbsistatic.com/uploads/scale_small/14/140903/4127149-11.jpg', id: 5, name: 'Hulk', email: 'hulk@super.de' },
    { urlImage: 'https://comicvine1.cbsistatic.com/uploads/scale_small/12/124259/7025229-rco022_1564570505.jpg', id: 6, name: 'Captain America', email: 'captainameric@super.de' },
];
const hero = SuperHeroItems.map(hero => <SuperHero urlImage={hero.urlImage} id={hero.id} name={hero.name} email={hero.email} key={hero.id} />)
const SuperHeroList = () => {
    return (
        <section className="super-hero">
            {hero}
            {/* <SuperHero urlImage="https://comicvine1.cbsistatic.com/uploads/scale_small/12/124259/7254202-wolv2020001_silva.jpg" id="1" name="Wolverine" email="wolwerine@super.de" />
            <SuperHero urlImage="https://comicvine1.cbsistatic.com/uploads/scale_small/10/104700/4831078-spider-man%201.jpg" id="2" name="Spider-Man" email="spiderman@super.de" />
            <SuperHero urlImage="https://comicvine1.cbsistatic.com/uploads/scale_small/11139/111399535/7231595-thor2020005-cvr.jpg" id="3" name="Thor" email="thor@super.de" />
            <SuperHero urlImage="https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/4956367-invim2015001-maleevvar-d8a38.jpg" id="4" name="Iron Man" email="ironman@super.de" />
            <SuperHero urlImage="https://comicvine1.cbsistatic.com/uploads/scale_small/14/140903/4127149-11.jpg" id="5" name="Hulk" email="hulk@super.de" />
            <SuperHero urlImage="https://comicvine1.cbsistatic.com/uploads/scale_small/12/124259/7025229-rco022_1564570505.jpg" id="6" name="Captain America" email="captainameric@super.de" /> */}






            {/* <article>
                <img src="https://comicvine1.cbsistatic.com/uploads/scale_small/12/124259/7254202-wolv2020001_silva.jpg" alt="" />
                <p>1</p>
                <h2>Wolverine</h2>
                <h3>wolwerine@super.de</h3>
            </article>
            <article>
                <img src="https://comicvine1.cbsistatic.com/uploads/scale_small/10/104700/4831078-spider-man%201.jpg" alt="" />
                <p>2</p>
                <h2>Spider-Man</h2>
                <h3>spiderman@super.de</h3>
            </article>
            <article>
                <img src="https://comicvine1.cbsistatic.com/uploads/scale_small/11139/111399535/7231595-thor2020005-cvr.jpg" alt="" />
                <p>3</p>
                <h2>Thor</h2>
                <h3>thor@super.de</h3>
            </article> */}
            {/* <article>
                <img src="https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/4956367-invim2015001-maleevvar-d8a38.jpg" alt="" />
                <p>4</p>
                <h2>Iron Man</h2>
                <h3>ironman@super.de</h3>
            </article>
            <article>
                <img src="https://comicvine1.cbsistatic.com/uploads/scale_small/14/140903/4127149-11.jpg" alt="" />
                <p>5</p>
                <h2>Hulk</h2>
                <h3>hulk@super.de</h3>
            </article>
            <article>
                <img src="https://comicvine1.cbsistatic.com/uploads/scale_small/12/124259/7025229-rco022_1564570505.jpg" alt="" />
                <p>6</p>
                <h2>Captain America</h2>
                <h3>captainamerica@super.de</h3>
            </article> */}
        </section>
    );
}

export default SuperHeroList;

