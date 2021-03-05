import { Component } from "@angular/core";
import { PostService } from "./services/post.service";
import { Post } from "./models/post";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [PostService],
})
export class AppComponent {
  faRedo = faRedo;
  posts: Post[] = [];
  error = "";

  constructor(private _postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  // Get posts from the setrvice
  loadPosts() {
    this._postService.getMemes().subscribe((res) => {
      this.posts = res;
    });
  }

  // Remove a post from the list
  removePost(i) {
    this.posts.splice(i, 1);
  }

  // Change error string to display error alert
  changeError(e) {
    console.log(e);

    this.error = e;
  }
}
