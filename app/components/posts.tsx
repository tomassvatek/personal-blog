type PostProps = {
  id: number;
  name: string;
  imageUrl: string;
  authorId: number;
  author: string;
};

function Post({ name, imageUrl, author }: PostProps) {
    return (
        <div>
            <h3>{author}</h3>
        </div>
    )
}

// function Posts() {
//     return ()
// }

export default Posts;
