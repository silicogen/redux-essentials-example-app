import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Spinner } from '../../components/Spinner'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { selectAllPosts, fetchPosts } from './postsSlice'

const PostExcerpt = ({ post }) =>
  <article className="post-excerpt" key={post.id}>
    <h3>{post.title}</h3>
    <div>
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date} />
    </div>
    <p className="post-content">{post.content.substring(0, 100)}</p>

    <ReactionButtons post={post} />
    <Link to={`/posts/${post.id}`} className="button muted-button">
      View Post
    </Link>
  </article>

export const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)

  const postStatus = useSelector(state =>
    state.posts.status)
  const error = useSelector(state => state.posts.error)

  // Чупров. В чём логика? Почему так сложно?

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  // Чупров. Почему не так? :
  // useEffect(() => dispatch(fetchPosts()), [])

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {
        {
          loading: <Spinner text="Loading..." />,
          succeeded: posts.slice()
            .sort((a, b) => b.date.localeCompare(a.date))
            .map(post => <PostExcerpt key={post.id} post={post} />),
          failed: <div>{error}</div>
        }[postStatus]
      }
    </section>
  )
}
