// Movie: id, title, main actors, genre, image

export class Movie {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  setMainActors(mainActors) {
    this.mainActors = mainActors;
  }

  getMainActors() {
    return this.mainActors;
  }

  setGenre(genre) {
    this.genre = genre;
  }

  getGenre() {
    return this.genre;
  }

  setImageUrl(imageUrl) {
    this.imageUrl = imageUrl;
  }

  getImageUrl() {
    return this.imageUrl;
  }
}
