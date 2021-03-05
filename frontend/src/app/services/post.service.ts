import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Post } from "src/app/models/post";

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private _http: HttpClient) {}

  server_url = "";

  // Get 100 most recent memes
  getMemes() {
    return this._http.get<Post[]>(this.server_url + "/memes");
  }

  // Get message by id
  getMeme(id) {
    return this._http.get<Post[]>(this.server_url + "/memes/" + id);
  }

  // Post meme
  postMeme(url, name, caption) {
    return this._http.post(this.server_url + "/memes", {
      url: url,
      name: name,
      caption: caption,
    });
  }

  // Edit meme
  patchMeme(id, url, caption) {
    return this._http.patch(this.server_url + "/memes/" + id, {
      url: url,
      caption: caption,
    });
  }

  // Delete a meme
  deleteMeme(id) {
    return this._http.delete(this.server_url + "/memes/" + id);
  }
}
