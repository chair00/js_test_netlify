document.addEventListener('DOMContentLoaded', () => {
    fetch('data/posts.json')
        .then(response => response.json())
        .then(posts => {
            const postList = document.getElementById('post-list');
            posts.forEach(post => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = post.url;
                link.textContent = post.title;
                listItem.appendChild(link);
                postList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});
