function formateTwoDigits(number) {
    if (number < 10) {
        return '0' + number
    }
    return number
}

function formatDate(date) {
    return `${formateTwoDigits(date.getHours())}:${formateTwoDigits(date.getMinutes())} ${date.toLocaleDateString()}`
}

function CommentTop({ comment }) {
    return (
        <div className="top">
            <img className="avatar" src={comment.author.avatarUrl} alt="" />
            <span className="name">{comment.author.name}</span>
            <span className="date">{formatDate(new Date(comment.created))}</span>
        </div>
    )
}

export function CommentBlock({ comment, depth = 0 }) {
    return (
        <>
            <div className="comment_block" style={{ marginLeft: depth * 30 + 'px' }}>
                <CommentTop comment={comment} />
                <div className="text">
                    {comment.text}
                </div>
            </div>
            {comment.answers && comment.answers.map((item) => (
                <CommentBlock comment={item} depth={depth + 1} />
            ))}
        </>
    )
}