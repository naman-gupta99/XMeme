import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { PostService } from "../services/post.service";

@Component({
  selector: "app-edit-form-modal",
  templateUrl: "./edit-form-modal.component.html",
  styleUrls: ["./edit-form-modal.component.css"],
})
export class EditFormModalComponent implements OnInit {
  constructor(
    private modalService: NgbActiveModal,
    private _postService: PostService,
    private formBuilder: FormBuilder
  ) {}

  closeResult: string;
  editForm: FormGroup;
  editSubmitted = false;
  validUrl = true;

  onImageError() {
    this.validUrl = false;
  }

  onImageLoad() {
    this.validUrl = true;
  }

  @Input() id;
  @Input() url;
  @Input() caption;
  @Input() errorOccured;

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      url: [this.url, [Validators.required]],
      caption: [this.caption, [Validators.required]],
    });

    this.editForm.controls.url.valueChanges.subscribe((url) => {
      this.validUrl = true;
    });
  }

  close() {
    this.modalService.close();
  }

  onSubmit(f: NgForm) {
    const url = this.editForm.get("url").value;
    const caption = this.editForm.get("caption").value;

    // Edit meme in the backend
    this._postService.patchMeme(this.id, url, caption).subscribe(
      (res) => {
        this.modalService.close(res);
      },
      (err) => {
        const s = err.status + ": " + err.error.error;
        console.log(s);
        this.errorOccured.emit(s);
        this.modalService.close(err);
      }
    ); //dismiss the modal
  }
}
