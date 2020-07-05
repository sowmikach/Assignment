//jshint esversion:6
var movies =[
  {
    "title":"Frozen",
    "poster":"https://runt-of-the-web.com/wordpress/wp-content/uploads/2014/08/frozen.jpg",
    "releaseDate":"2013-11-29",
    "isRestricted":false,
    "language":"en",
    "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "likes":"5532"
  },
  {
    "title":"The Lion King",
    "poster":"https://geekologie.com/2016/02/01/tim-burton-disney-movie-posters-10.jpg",
    "releaseDate":"2019-07-09",
    "isRestricted":false,
    "language":"en",
    "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "likes":"2782"
  },
  {
    "title":"Venom",
    "poster":"https://upload.wikimedia.org/wikipedia/en/1/18/Venom_%282018_film_poster%29.png",
    "releaseDate":"2018-02-18",
    "isRestricted":true,
    "language":"en",
    "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "likes":"298"
  },
  {
    "title":"The Adventures of Tin Tin",
    "poster":"https://cdn3.movieweb.com/i/movie/qlfUJQVZTalq5TsDB2oa63o3VH75J2/1000:100/The-Adventures-Of-Tintin.jpg",
    "releaseDate":"2016-12-18",
    "isRestricted":false,
    "language":"en",
    "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "likes":"547"
  },
  {
    "title":"Bahubali",
    "poster":"https://images-na.ssl-images-amazon.com/images/I/711eHgGtnFL._SL1209_.jpg",
    "releaseDate":"2018-04-28",
    "isRestricted":false,
    "language":"te",
    "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "likes":"9123"
  },
  {
    "title":"Anabella",
    "poster":"https://s3.r29static.com/bin/entry/466/x,80/1302167/annabelle-embed1.jpg",
    "releaseDate":"2014-11-29",
    "isRestricted":true,
    "language":"en",
    "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "likes":"5647"
  },
  {
    "title":"Jai Lava Kusa",
    "poster":"https://gumlet.assettype.com/thequint/2017-09/74138995-ad5a-41fc-a73a-fe7bfa43a564/jai_lava_kusa_the_quint.jpg",
    "releaseDate":"2012-09-21",
    "isRestricted":false,
    "language":"te",
    "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "likes":"4321"
  },
  {
    "title":"Avatar",
    "poster":"https://cdn1.thr.com/sites/default/files/2019/03/avatar-publicity_still-h_2019.jpg",
    "releaseDate":"2009-12-18",
    "isRestricted":true,
    "language":"en",
    "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "likes":"656"
  },
  {
    "title":"Aruvi",
    "poster":"https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/aruvi-et00064921-09-11-2017-01-25-36.jpg",
    "releaseDate":"2010-07-09",
    "isRestricted":true,
    "language":"ta",
    "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "likes":"888"
  },
  {
    "title":"Ala Viakuntapuramulo",
    "poster":"https://m.media-amazon.com/images/M/MV5BYzVjNThjYzgtODRhYS00N2M0LTg5OWQtMTA0YjBhODJhNzU3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "releaseDate":"2020-01-12",
    "isRestricted":false,
    "language":"te",
    "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "likes":"9871"
  }
];
