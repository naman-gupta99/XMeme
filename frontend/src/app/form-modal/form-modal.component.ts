import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { PostService } from "../services/post.service";

@Component({
  selector: "app-form-modal",
  templateUrl: "./form-modal.component.html",
  styleUrls: ["./form-modal.component.css"],
})
export class FormModalComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private _postService: PostService,
    private formBuilder: FormBuilder
  ) {}

  closeResult: string;
  postForm: FormGroup;
  validUrl = true;

  onImageError() {
    this.validUrl = false;
  }

  onImageLoad() {
    this.validUrl = true;
  }

  @Input() posts;
  @Output() errorOccured = new EventEmitter();

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      url: ["", [Validators.required]],
      name: ["", [Validators.required]],
      caption: ["", [Validators.required]],
    });

    this.postForm.controls.url.valueChanges.subscribe((url) => {
      this.validUrl = true;
    });
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  // Get Meme to add to add into posts list
  getMeme(id) {
    this._postService.getMeme(id).subscribe((res) => this.posts.unshift(res));
  }

  onSubmit(f: NgForm) {
    const url = this.postForm.get("url").value;
    const name = this.postForm.get("name").value;
    const caption = this.postForm.get("caption").value;

    // Post meme to the backend
    this._postService.postMeme(url, name, caption).subscribe(
      (res) => this.getMeme(res["id"]),
      (err) => {
        const s = err.status + ": " + err.error.error;
        console.log(s);
        this.errorOccured.emit(s);
      }
    );

    // Reset form
    this.postForm.setValue({ url: "", name: "", caption: "" });
    this.modalService.dismissAll();
  }

  faPlus = faPlus;
}
