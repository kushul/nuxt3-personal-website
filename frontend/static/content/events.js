const events = [
    {
        type: 'speaker',
        color: 'bg-yellow-700',
        title: 'Ghost theme development',
        image:
            'devcon-2022.jpg',
        bg_position: "bg-center",
        date: '2022-11-24T00:00:00.000Z',
        name: 'Develop Conference 2022',
        icon: "speaker.svg",
        country: 'Caudan Art Center, Mauritius',
        links: [
            {
                text: 'frontend.mu',
                url:
                    'https://frontend.mu/meetup/36'
            }
        ]
    },
    {
        type: 'speaker',
        color: 'bg-yellow-700',
        title: 'Web Accessibility & UI/UX',
        image:
            'frontendmu-speaker-2022.webp',
        bg_position: "bg-bottom",
        date: '2022-05-14T00:00:00.000Z',
        name: 'Frontend Meetup, Outremer telecom',
        icon: "speaker.svg",
        country: 'Ebene, Mauritius',
        links: [
            {
                text: 'frontend.mu',
                url:
                    'https://frontend.mu/meetup/36'
            }
        ]
    },
    {
        type: 'jury',
        color: 'bg-yellow-700',
        title: 'Jury Webcup 2022',
        image:
            'webcup-2022.png',
        bg_position: "bg-center",
        date: '2022-05-14T00:00:00.000Z',
        name: 'Webcup Maurice',
        icon: "jury.svg",
        country: 'SD Worx, Mauritius',
        links: [
            {
                text: 'Maurice Info',
                url:
                    'https://www.maurice-info.mu/2022-06-09-photos-la-webcup-maurice-2022-remportee-par-lequipe-synced-place.html'
            }
        ]
    },
    {
        type: 'speaker',
        color: 'bg-yellow-700',
        title: 'Web Accessibility & UI/UX',
        image:
            'webcup-conf-2022.png',
        bg_position: "bg-bottom",
        date: '2022-05-14T00:00:00.000Z',
        name: 'Webcup Conference',
        icon: "speaker.svg",
        country: 'Indian Ocean',
        links: [
            {
                text: 'LinkedIn post',
                url:
                    'https://www.linkedin.com/posts/association-webcup_tech-bootcamp-activity-6927918199929729025-cB6r?utm_source=share&utm_medium=member_desktop'
            }
        ]
    },
    {
        type: 'jury',
        color: 'bg-yellow-700',
        title: 'Jury Digicup 2022',
        image:
            'digicup-2022.jpg',
        bg_position: "bg-center",
        date: '2022-04-23T00:00:00.000Z',
        name: 'Digicup Maurice',
        icon: "jury.svg",
        country: 'SD Worx, Mauritius',
        links: [
            {
                text: 'Video on fb',
                url:
                    'https://ne-np.facebook.com/DigiCup.Mu/videos/jury-panel-of-digicup-2022/389544979730927/'
            }
        ]
    },
    {
        type: 'competition',
        color: 'bg-purple-700',
        title: 'Best SEO Expert in the Vanilla Islands',
        image:
            'best-seo-2020.jpg',
        bg_position: "bg-center",
        date: '2020-10-07T00:00:00.000Z',
        name: 'SEO Competition',
        country: 'Virtual',
        icon: "competition.svg",
        links: [
            {
                text: 'Info by Vanilla Island',
                url:
                    'https://www.vanilla-islands.org/en/best-seo-expert/'
            }
        ]
    },
    {
        type: 'speaker',
        color: 'bg-green-700',
        title: 'Talking about Front-End Ecosystem',
        image:
            'devcon-2020.jpg',
        bg_position: "bg-center",
        date: '2020-09-10T00:00:00.000Z',
        name: 'Developer Conference',
        country: 'Virtual',
        icon: "speaker.svg",
        links: [
            {
                text: 'Video on Youtube',
                url:
                    'https://www.youtube.com/watch?v=5L7-GV0fqzc'
            }

        ]
    },
    {
        type: 'attendee',
        color: 'bg-pink-700',
        title: 'Vue JS Conference Amsterdam 2020',
        image:
            'vuejs-amsterdam-2020.jpg',
        bg_position: "bg-bottom",
        date: '2020-02-20T00:00:00.000Z',
        name: 'Vuejs conference',
        country: 'Theater, Amsterdam',
        icon: "attendee.svg",
        links: [
            {
                text: 'Blogpost',
                url:
                    'https://kushulsoomaree.netlify.app/blog/vuejs-amsterdam-2020'
            }

        ]
    },

    {
        type: 'competition',
        color: 'bg-purple-700',
        title: '2nd place in the webcup final 2019',
        image:
            'webcup-final-mayotte-2019.jpg',
        bg_position: "bg-top",
        date: '2019-12-07T00:00:00.000Z',
        name: 'Webcup Final',
        country: 'Mamoudzou, Mayotte',
        icon: "competition.svg",
        links: [
            {
                text: 'Report by ict.io',
                url:
                    'https://ict.io/double-finale-internationale-webcup/'
            }
        ]
    },
    {
        type: 'competition',
        color: 'bg-yellow-700',
        title: '1st place in the krathathon 2019',
        image:
            'krakathon-2019.jpg',
        bg_position: "bg-center",
        date: '2019-10-19T00:00:00.000Z',
        name: 'Krakathon',
        icon: "competition.svg",
        country: 'Caudan Art Center, Mauritius',
        links: [
            {
                text: 'Report by ict.io',
                url:
                    'https://ict.io/krakathon-2019-team-kalchul-devance-ses-adversaires-de-4000-points/'
            }
        ]
    },
    {
        type: 'speaker',
        color: 'bg-green-700',
        title: 'Talking about UI code with Namespaces',
        image:
            'namespaces-2019.jpg',
        bg_position: "bg-center",
        date: '2019-06-22T00:00:00.000Z',
        name: 'Front End Meetup',
        country: 'Moka, Mauritius',
        icon: "speaker.svg",
        links: [
            {
                text: 'Tweet By Sandeep',
                url:
                    'https://twitter.com/__Sun__/status/1142320655012155392?s=19'
            }
        ]
    },
    {
        type: 'attendee',
        color: 'bg-green-700',
        title: 'Switch conference Mauritius 2019',
        image:
            'switch-conference-2019.jpg',
        bg_position: "bg-center",
        date: '2019-06-07T00:00:00.000Z',
        name: 'Switch conference',
        country: 'Jinfei, Mauritius',
        icon: "attendee.svg",
        links: [
            {
                text: 'Report by mscc.mu',
                url:
                    'https://www.mscc.mu/untitled-2/'
            }
        ]
    },
    {
        type: 'speaker',
        color: 'bg-yellow-700',
        title: 'Talking about Vuex in Devcon 2019',
        image:
            'devcon-2019.jpeg',
        bg_position: "bg-center",
        date: '2019-04-12T00:00:00.000Z',
        name: 'Developer Conference',
        icon: "speaker.svg",
        country: 'Voila hotel, Mauritius',
        links: [
            {
                text: 'Call for speakers',
                url:
                    'https://sessionize.com/devcon-mauritius-2019'
            }
        ]
    },
    {
        type: 'competition',
        color: 'bg-yellow-700',
        title: '2nd place in krakathon 2018',
        image:
            'wachawi-2nd-prize_2019.jpg',
        bg_position: "bg-center",
        date: '2018-10-20T00:00:00.000Z',
        name: 'Krakathon',
        icon: "competition.svg",
        country: 'Turbine, Mauritius',
        links: [
            {
                text: 'Blogpost By Ish',
                url:
                    'https://www.lsl.digital/blog/wachawi-by-lsl-digital-at-the-krakathon-2018'
            }
        ]
    },
    {
        type: 'speaker',
        color: 'bg-yellow-700',
        title: 'Talking about CSS grid in Devcon 2018',
        image:
            'devcon-2018.jpg',
        bg_position: "bg-center",
        date: '2018-05-17T00:00:00.000Z',
        name: 'Developer Conference',
        icon: "speaker.svg",
        country: 'Voila hotel, Mauritius',
        links: [
            {
                text: 'FB post by MSCC',
                url:
                    'https://www.facebook.com/MauritiusSoftwareCraftsmanshipCommunity/photos/discover-css-grid-by-kushul-soomaree-jordan-bienvenue-starting-in-5-minutes-in-e/981006642058399/'
            }
        ]
    },
    {
        type: 'competition',
        color: 'bg-yellow-700',
        title: '1st place in the Webcup 2018',
        image:
            'webcup-winner-2018.jpg',
        bg_position: "bg-top",
        date: '2018-05-06T00:00:00.000Z',
        name: 'Webcup Maurice',
        icon: "competition.svg",
        country: 'Ebene tower, Mauritius',
        links: [
            {
                text: 'Article by lexpress.mu',
                url:
                    'https://www.lexpress.mu/article/331246/webcup-2018-lsl-digital-en-finale-en-novembre'
            }
        ]
    },
]

export default events;