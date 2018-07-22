import {
    shallow,
    ShallowWrapper
} from 'enzyme';
import * as React from 'react';

// Components.
import {
    Movies,
    Props
} from './';

interface Scope {
    props: Props;
    wrapper: ShallowWrapper;
}

describe('src/pages/Movies', () => {
    let scope: Scope;

    beforeEach(() => {
        const props: Props = {
            filters: {
                averageRating: 10,
                genreIds: [],
            },
            genres: {
                loading: false,
                results: [],
            },
            getGenres: jest.fn(),
            getMovies: jest.fn(),
            movies: {
                page: 1,
                loading: false,
                results: [],
                totalPages: 1,
            },
            setPageTitle: jest.fn(),
        };

        scope = {
            props,
            wrapper: shallow(<Movies {...props} />),
        };
    });

    describe('<Movies /> snapshots', () => {
        it('should match the snapshot with default props', () => {
            expect(scope.wrapper).toMatchSnapshot();
        });
    });

    describe('when the component mounts', () => {
        it('should set the title in the redux store and get the genres', () => {
            expect(scope.props.setPageTitle).toBeCalled();
            expect(scope.props.getGenres).toBeCalled();
            expect(scope.props.getMovies).toBeCalled();
        });

        it('should not get the movies if the there are movies in the store', () => {
            scope.props.movies.results = [
                {
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
                }
            ];

            (scope.props.getMovies as jest.Mock).mockReset();

            shallow(<Movies {...scope.props} />);

            expect(scope.props.getMovies).not.toBeCalled();
        });
    });
});
