document.addEventListener('DOMContentLoaded', () => {
    const postList = document.getElementById('post-list');
    const addArticleForm = document.getElementById('add-article-form');

    const fetchArticles = async () => {
        const response = await fetch('/api/articles');
        const articles = await response.json();
        postList.innerHTML = '';
        articles.forEach(article => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `/api/articles/${article.id}`;
            link.textContent = article.title;
            listItem.appendChild(link);
            postList.appendChild(listItem);
        });
    };

    const addArticle = async (event) => {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const response = await fetch('/api/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }),
        });
        if (response.ok) {
            fetchArticles();
            addArticleForm.reset();
        } else {
            console.error('Failed to add article');
        }
    };

    addArticleForm.addEventListener('submit', addArticle);
    fetchArticles();
});
