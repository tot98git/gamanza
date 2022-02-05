import { COMICS_FORMAT_LABELS } from '../constants/comics';

export const mapComicItemToCard = (item) => {
  const { thumbnail, title, prices, ...comic } = item;

  const { path, extension } = thumbnail || {};

  const finalThumbnail = `${path}/portrait_medium.${extension}`;

  const [{ price }] = prices.sort((a = {}, b = {}) => a.price < b.price);

  return {
    ...comic,
    title,
    thumbnail: finalThumbnail,
    price: `${price} €`,
  };
};

export const mapComicProperties = (item) => {
  const {
    diamondCode,
    dates = [],
    format = '',
    pageCount,
    creators: { items: creators = [] } = {},
    characters: { items = [] } = {},
  } = item;

  const readableCharacters = items.map(({ name }) => name);
  const readableCreators = creators.map(({ name }) => name);
  let readableFormat = COMICS_FORMAT_LABELS[format.toUpperCase()] || '';
  readableFormat =
    readableFormat.charAt(0).toUpperCase() + readableFormat.slice(1);
  const { date } = dates.find(({ type }) => type === 'focDate') || {};
  const parsedDate = new Date(date);

  const day = parsedDate.getDay();
  const month = parsedDate.getMonth();
  const year = parsedDate.getFullYear();

  const readableDate = day && month && year ? `${day}/${month}/${year}` : '';

  return {
    diamondCode,
    date: readableDate,
    pages: pageCount,
    format: readableFormat,
    characters: readableCharacters,
    creators: readableCreators,
  };
};
