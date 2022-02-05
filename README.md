## Kastriot Kadriu

This project fetches date from the Marvel API and displays them in a view.
The view is a **responsive grid** that supports **infinite scrolling**.

Header is used as a parameter for format property. 

For some properties, the API returns duplicate results. Frontend hasn't taken upon itself to make sure the results are unique as that's the responsibility of the API, however we do make sure the item indexing is unique otherwise we could encounter issues between component re-renders.

The modal lists detailed properties of a single comic item. The data isn't equally available for all of them, so we omit from displaying falsey properties.

Header and modal are also responsive.

