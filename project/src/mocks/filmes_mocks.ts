
/* eslint @typescript-eslint/no-var-requires: "off" */
export interface FilmData {
  title: string;
  imgPreviewSrc: string;
  imgPosterSrc: string;
  rating: number;
  videoSrc: string;
  description: string;
  imgBackgroundSrc: string;
  genres: Array<string>;
}

class FilmDataMocks implements FilmData {
  title: string;
  imgPreviewSrc: string;
  imgPosterSrc: string;
  rating: number;
  videoSrc: string;
  description: string;
  imgBackgroundSrc: string;
  genres: Array<string>;

  constructor(
    title: string, imgSrc: string,
    videoURL: string, description: string, imgPosterSrc: string,
    backgroundImageSrc: string = require('./mocks_data/img/background/default.jpeg') as string
  ) {
    this.title = title;
    this.imgPreviewSrc = imgSrc;
    this.videoSrc = videoURL;
    this.description = description;
    this.imgPosterSrc = imgPosterSrc;
    this.imgBackgroundSrc = backgroundImageSrc;
    this.rating = Math.ceil(Math.random() * 100) / 10;
    this.genres = ['UNKNOWN_1', 'UNKNOWN_2'];
  }
}


// ID --> FilmDataMocks
export const filmesDataMocks: Record<string, FilmDataMocks> = {
  'fantastic-beasts-the-crimes-of-grindelwald': new FilmDataMocks(
    'Fantastic Beasts: The Crimes of Grindelwald',
    require('./mocks_data/img/fantastic-beasts-the-crimes-of-grindelwald.jpg') as string,
    'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    `
    Fantastic Beasts: The Crimes of Grindelwald is a 2018 fantasy film directed by David Yates and written by J. K. Rowling. 
    The sequel to Fantastic Beasts and Where to Find Them (2016),
    it is the second instalment in the Fantastic Beasts film series and the tenth overall in the Wizarding World franchise. 
    It features an ensemble cast including Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Zoë Kravitz, 
    Callum Turner, Claudia Kim, William Nadylam, Kevin Guthrie, Jude Law, and Johnny Depp. Set in 1927, 
    it follows Newt Scamander and Albus Dumbledore as they attempt to take down the dark wizard Gellert Grindelwald while facing 
    new threats in a more divided wizarding world.
    `,
    require('./mocks_data/img/posters/fantastic_beasts_poster.jpg') as string
  ),
  'bohemian-rhapsody': new FilmDataMocks(
    'Bohemian Rhapsody',
    require('./mocks_data/img/bohemian-rhapsody.jpg') as string,
    'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    `
    Bohemian Rhapsody is a 2018 biographical musical drama film that focuses on the life of Freddie Mercury, 
    the lead singer of the British rock band Queen, from the formation of the band in 1970 to their 
    1985 Live Aid performance at the original Wembley Stadium. It was directed by Bryan Singer[a] from a screenplay 
    by Anthony McCarten, and produced by Graham King and Queen manager Jim Beach. It stars Rami Malek as Mercury, with 
    Lucy Boynton, Gwilym Lee, Ben Hardy, Joe Mazzello, Aidan Gillen, Tom Hollander, and Mike Myers in supporting roles. 
    Queen members Brian May and Roger Taylor also served as consultants. A British-American venture, it was produced by 
    Regency Enterprises, GK Films and Queen Films, and was distributed by 20th Century Fox.
    `,
    require('./mocks_data/img/posters/bohemian_rhapsody_poster.jpg') as string
  ),
  'macbeth': new FilmDataMocks(
    'Macbeth',
    require('./mocks_data/img/macbeth.jpg') as string,
    'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    `
    Macbeth is a 2015 epic historical drama film directed by Justin Kurzel and written for the screen by Jacob Koskoff, 
    Todd Louiso and Michael Lesslie, based on William Shakespeare's play of the same name. The film stars Michael Fassbender 
    in the title role and Marion Cotillard as Lady Macbeth, with Paddy Considine, Sean Harris, Jack Reynor, Elizabeth Debicki and 
    David Thewlis in supporting roles. The story follows a Scottish lord's rise to power after receiving a prophecy from a trio of 
    witches that one day he will become King of Scotland. Like the play it was adapted from, the film dramatises the damaging physical 
    and psychological effects of political ambition on those who seek power for its own sake.
    `,
    require('./mocks_data/img/posters/macbeth_poster.jpg') as string
  ),
  'aviator': new FilmDataMocks(
    'Aviator',
    require('./mocks_data/img/aviator.jpg') as string,
    'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    `
    The Aviator is a 2004 American epic biographical drama film directed by Martin Scorsese and written by John Logan. It stars Leonardo 
    DiCaprio as Howard Hughes, Cate Blanchett as Katharine Hepburn, and Kate Beckinsale as Ava Gardner. The supporting cast features Ian Holm, 
    John C. Reilly, Alec Baldwin, Jude Law, Gwen Stefani, Kelli Garner, Matt Ross, Willem Dafoe, Alan Alda, and Edward Herrmann.
    `,
    require('./mocks_data/img/posters/aviator_poster.jpeg') as string
  ),

  'we-need-to-talk-about-kevin': new FilmDataMocks(
    'We need to talk about Kevin',
    require('./mocks_data/img/we-need-to-talk-about-kevin.jpg') as string,
    'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    `
    We Need to Talk About Kevin is a 2003 novel by Lionel Shriver, published by Serpent's Tail, about a fictional school massacre. 
    It is written from the first person perspective of the teenage killer's mother, Eva Khatchadourian, and documents her attempt 
    to come to terms with her psychopathic son Kevin and the murders he committed, as told in a series of letters from Eva to her husband.
    `,
    require('./mocks_data/img/posters/we_need_to_talk_about_kevin.jpg') as string
  ),
  'what-we-do-in-the-shadows': new FilmDataMocks(
    'What We Do in the Shadows',
    require('./mocks_data/img/what-we-do-in-the-shadows.jpg') as string,
    'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    `
    What We Do in the Shadows is a 2014 New Zealand mockumentary horror comedy film written and directed by Jemaine Clement and Taika 
    Waititi and the first installment in the What We Do in the Shadows franchise. The film also stars Clement and Waititi, along with 
    Jonathan Brugh, Ben Fransham, Cori Gonzalez-Macuer, Stu Rutherford, and Jackie van Beek. The film's plot concerns several vampires 
    who live together in a flat in Wellington.
    `,
    require('./mocks_data/img/posters/what_we_do_in_the_shadows.jpg') as string
  ),
  'revenant': new FilmDataMocks(
    'Revenant', '/img/revenant.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    `
    The Revenant is a 2015 American action drama film[5] directed by Alejandro G. Iñárritu. The screenplay by Mark L. Smith and Iñárritu 
    is based in part on Michael Punke's 2002 novel The Revenant, which describes frontiersman Hugh Glass's experiences in 1823, and which is 
    based on the 1915 poem The Song of Hugh Glass. The film stars Leonardo DiCaprio and Tom Hardy.
    `,
    require('./mocks_data/img/posters/revenant_poster.jpg') as string
  ),
  'johnny-english': new FilmDataMocks(
    'Johnny English',
    require('./mocks_data/img/johnny-english.jpg') as string,
    'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    `
    Johnny English is a 2003 spy action comedy film directed by Peter Howitt and written by Neal Purvis, Robert Wade and William Davies. 
    It is a British-French venture produced by StudioCanal and Working Title Films, and distributed by Universal Pictures.
    Starring Rowan Atkinson in the title role along with Natalie Imbruglia, Ben Miller and John Malkovich, it is the first instalment of 
    the Johnny English film series and serves as a parody and homage to the spy genre, mainly the James Bond film series, as well as Atkinson's 
    Mr. Bean character. The character is also related to Atkinson's bumbling spy character from a series of adverts in the United Kingdom for 
    Barclaycard in the 1990s.
    `,
    require('./mocks_data/img/posters/Johnny_English_poster.jpg') as string
  )
};
