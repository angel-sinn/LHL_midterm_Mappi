-- TEST DATA BELOW
INSERT INTO pins (map_id, user_id, title, description, image_url, lat, lng, address) VALUES
-- Map 1
  (1, 1, 'Cardero Restaurant', 'Fine Dining Marina Restaurant', 'https://media-cdn.tripadvisor.com/media/photo-s/12/ab/ad/61/photo0jpg.jpg', 	49.291674, -123.127480, '1583 Coal Harbour Quay, Vancouver, BC V6G 3E7'),
  (1, 1, 'Black Frog Eatery','Cozy and comfy eatery', 'https://ssmscdn.yp.ca/image/resize/e9814e29-da35-49cb-8a91-af766f7b0b7a/ypui-d-mp-pic-gal-lg/black-frog-eatery-2.jpg', 49.285227, -123.108532, '108 Cambie St, Vancouver, BC V6B 2M8'),
  (1, 2, 'Dark Table', 'Blind servers dining experience', 'https://s3-media0.fl.yelpcdn.com/bphoto/6ngjBBEeA6V3qXX3BEusww/o.jpg', 49.268591, -123.164907, '2611 W 4th Ave, Vancouver, BC V6K 1P8'),
  (1, 2, 'Gyu-Kaku Japanese BBQ', 'Japanese BBQ chain', 'https://d1ralsognjng37.cloudfront.net/d6a34492-0be9-4ffe-a5fd-32fc90428a43.jpeg', 49.263429, -123.125686, '950 W Broadway #201, Vancouver, BC V5Z 1K7'),
-- Map 2 ~ pins from two users
  (2, 1, 'LEspresso Bar Mercurio', 'Modern Italian Cafe', 'https://media-cdn.tripadvisor.com/media/photo-s/1a/35/64/93/main-dining-room.jpg', 43.667611, -79.399141, '321 Bloor St W, Toronto, ON M5S 1S5'),
  (2, 1, 'Quantum Coffee', 'Hipster cafe for nerds','http://dailycoffeenews.com/wp-content/uploads/2015/12/Quantum-Espresso-Bar-620x415.jpg', 43.645620, -79.395342, '460 King St W, Toronto, ON M5V 1L7'),
  (2, 2, 'JetFuel Coffee Shop', 'Indie espresso joint', 'https://torontoist.com/attachments/toronto_david/villain_jetfuel.jpg', 43.665482, -79.368235, '519 Parliament St, Toronto, ON M4X 1P3'),
  (2, 2, 'Liberty Village Market & Cafe', 'Unfussy cafe outlet', 'https://s3-media0.fl.yelpcdn.com/bphoto/hMRTh3EiHHwOf1DtVScSPQ/o.jpg', 43.638169, -79.421348, '65 Jefferson Ave, Toronto, ON M6K 1Y3'),
-- Map 3 ~ Favourited Map from other user
  (3, 2, 'South Glenmore Park', 'Waterfront green space with biking and hiking', 'https://media.chatterblock.com/cache/4e/91/4e9161e01f730ff5dca466be2b77c570.jpg', 50.973261, -114.119102, '24 St SW, Calgary, AB T2V 3N8'),
  (3, 2, 'Fish Creek Provincial Park', 'Expansive park','https://www.dalhousiecalgary.ca/wp-content/uploads/2020/07/fish-creek-park.jpg', 50.914949, -114.010757, 'Calgary, AB'),
  (3, 2, 'Nose Hill Park', 'Tranquil, spacious park with abundant wildlife', 'https://i.redd.it/o4hj9azfud411.jpg', 51.110487, -114.108844, '5620 14 St NW, Calgary, AB T3K 2P6'),
  (3, 2, 'Bowness Park', 'Serene spot with a lagoon and winter ice skating', 'https://upload.wikimedia.org/wikipedia/commons/3/37/Bowness_Park_lagoon.jpg', 51.097463, -114.217076, '8900 48 Ave NW, Calgary, AB T3B 2B2'),
-- Map 4 ~ Collaborated Map from other user
  (4, 2, 'South Glenmore Park', 'Waterfront green space with biking and hiking', 'https://media.chatterblock.com/cache/4e/91/4e9161e01f730ff5dca466be2b77c570.jpg', 50.973261, -114.119102, '24 St SW, Calgary, AB T2V 3N8'),
  (4, 2, 'Fish Creek Provincial Park', 'Expansive park','https://www.dalhousiecalgary.ca/wp-content/uploads/2020/07/fish-creek-park.jpg', 50.914949, -114.010757, 'Calgary, AB'),
  (4, 2, 'Nose Hill Park', 'Tranquil, spacious park with abundant wildlife', 'https://i.redd.it/o4hj9azfud411.jpg', 51.110487, -114.108844, '5620 14 St NW, Calgary, AB T3K 2P6'),
  (4, 1, 'Bowness Park', 'Serene spot with a lagoon and winter ice skating', 'https://upload.wikimedia.org/wikipedia/commons/3/37/Bowness_Park_lagoon.jpg', 51.097463, -114.217076, '8900 48 Ave NW, Calgary, AB T3B 2B2');
