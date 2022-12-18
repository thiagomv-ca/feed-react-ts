import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void ;
}

export function Comment({content, onDeleteComment}: CommentProps) {
const [likeCount, setLikeCount] = useState(0);

function handleLikeComment() {
  setLikeCount(likeCount +1)
}
  function handleDeleteComment() {
    onDeleteComment(content)
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/thiagomv-ca.png" alt='' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thiago</strong>
              <time
                title="August 30 04:00pm"
                dateTime="2022-08-30 04
                :00"
              >
                Published ago 1 hour
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
            <button onClick={handleLikeComment}>
                <ThumbsUp />
                Like <span>{likeCount}</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
