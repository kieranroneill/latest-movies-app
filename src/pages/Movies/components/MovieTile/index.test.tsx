import { mount } from 'enzyme';
import * as React from 'react';

// Components.
import {
    MovieTile,
    Props
} from './';

describe('src/pages/Movies/components/MovieTile/index.tsx', () => {
    let props: Props;

    beforeEach(() => {
        props = {
            genres: {
                loading: false,
                results: [
                    {
                        id: 16,
                        name: 'Anime',
                    }
                ],
            },
            movie: {
                adult: false,
                backdrop_path: '/kEqeponciiz6TyuKWtnKSzXzbGa.jpg',
                genre_ids: [16, 80, 9648, 28, 18],
                id: 493006,
                original_language: 'ja',
                original_title: '名探偵コナン ゼロの執行人',
                overview: 'There is a sudden explosion at Tokyo Summit\'s giant Edge of Ocean facility. The shadow of Tōru Amuro, who works for the National Police Agency Security Bureau as Zero, appears at the site. In addition, the \'triple-face\' character is known as Rei Furuya as a detective and Kogorō Mōri\'s apprentice, and he is also known as Bourbon as a Black Organization member. Kogorō is arrested as a suspect in the case of the explosion. Conan conducts an investigation to prove Kogorō\'s innocence, but Amuro gets in his way.',
                popularity: 63.691,
                poster_path: '/mMWV5MXn2pkDnnI4vWpy3dRWdNC.jpg',
                release_date: '2018-04-13',
                title: 'Detective Conan: Zero the Enforcer',
                video: false,
                vote_average: 4.4,
                vote_count: 9,
            },
        };
    });

    describe('<MovieTile /> snapshots', () => {
        it('should match the snapshot with default props', () => {
            expect(mount(<MovieTile {...props} />)).toMatchSnapshot();
        });

        it('should match the snapshot with a default placeholder image', () => {
            props.movie.poster_path = null;

            expect(mount(<MovieTile {...props} />)).toMatchSnapshot();
        });
    });
});
