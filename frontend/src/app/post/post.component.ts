import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EditFormModalComponent } from "../edit-form-modal/edit-form-modal.component";
import { PostService } from "../services/post.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  validUrl = true;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  @Input() i: number;
  @Input() id: string;
  @Input() name: string;
  @Input() url: String;
  @Input() caption: String;

  @Output() public onDelete: EventEmitter<any> = new EventEmitter();
  @Output() public errorOccured: EventEmitter<any> = new EventEmitter();

  constructor(
    private modalService: NgbModal,
    private _postService: PostService
  ) {}

  ngOnInit(): void {}

  onImageError(event) {
    this.validUrl = false;
  }

  // Delete post from parent component
  deletePost() {
    this._postService.deleteMeme(this.id).subscribe((res) => {
      this.onDelete.emit(this.i);
    });
  }

  // Open Edit Form Modal
  openModal() {
    const modalRef = this.modalService.open(EditFormModalComponent, {
      backdrop: true,
      windowClass: "d-block",
      backdropClass: "modal-backdrop",
    });

    modalRef.componentInstance.id = this.id;
    modalRef.componentInstance.url = this.url;
    modalRef.componentInstance.caption = this.caption;
    modalRef.componentInstance.errorOccured = this.errorOccured;

    modalRef.result.then((res) => {
      this.url = res["url"];
      this.caption = res["caption"];
    });
  }
}
