/* 
  NOTE: The creation of these double collection that seemingly do the same thing is because I thought that API would accept string parameters in snake case as it's usually common. 
  I'm leaving them to demonstrate the principle.
*/

export const COMICS_FORMAT = {
  COMIC: 'comic',
  MAGAZINE: 'magazine',
  'TRADE PAPERBACK': 'trade paperback',
  HARDCOVER: 'hardcover',
  DIGEST: 'digest',
  'GRAPHIC NOVEL': 'graphic novel',
  'DIGITAL COMIC': 'digital comic',
  'INFINITE COMIC': 'infinite comic',
};

export const COMICS_FORMAT_LABELS = {
  COMIC: 'comic',
  MAGAZINE: 'magazine',
  'TRADE PAPERBACK': 'trade paperback',
  HARDCOVER: 'hardcover',
  DIGEST: 'digest',
  'GRAPHIC NOVEL': 'graphic novel',
  'DIGITAL COMIC': 'digital comic',
  'INFINITE COMIC': 'infinite comic',
};

export const COMICS_PROPERTIES = {
  RELEASE_YEAR: 'releaseYear',
  FORMAT: 'format',
  PAGES: 'pages',
  CHARACTERS: 'characters',
  CREATORS: 'creators',
  DIAMOND_CODE: 'diamondCode',
  DATE: 'date',
};

export const COMICS_PROPERTIES_LABELS = {
  RELEASE_YEAR: 'Year of release',
  FORMAT: 'Format',
  PAGES: 'Pages',
  CHARACTERS: 'Characters',
  CREATORS: 'Creators',
  DIAMOND_CODE: 'Diamond code',
  DATE: 'Date',
};
