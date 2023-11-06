/* 
  File Name: SophisticatedCode.js
  
  Description: This code is a sophisticated and complex example of a social media platform backend.
               It includes user authentication, posting, commenting, and liking functionalities.
*/

// User Class
class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.loggedin = false;
    this.posts = [];
  }

  login() {
    // Implement login logic here
    this.loggedin = true;
    console.log(`User ${this.username} logged in successfully.`);
  }

  logout() {
    // Implement logout logic here
    this.loggedin = false;
    console.log(`User ${this.username} logged out.`);
  }

  createPost(content) {
    // Implement create post logic here
    const post = new Post(content, this.username);
    this.posts.push(post);
    console.log(`Post created by ${this.username}: ${content}`);
  }

  commentOnPost(postId, content) {
    // Implement comment on post logic here
    const post = this.posts.find((p) => p.id === postId);
    if (post) {
      const comment = new Comment(content, this.username);
      post.addComment(comment);
      console.log(`Comment added on Post ${postId} by ${this.username}`);
    } else {
      console.log(`Post ${postId} not found.`);
    }
  }

  likePost(postId) {
    // Implement like post logic here
    const post = this.posts.find((p) => p.id === postId);
    if (post) {
      post.addLike(this.username);
      console.log(`Post ${postId} liked by ${this.username}`);
    } else {
      console.log(`Post ${postId} not found.`);
    }
  }
}

// Post Class
class Post {
  static counter = 0;

  constructor(content, creator) {
    this.id = Post.counter++;
    this.content = content;
    this.creator = creator;
    this.comments = [];
    this.likes = [];
    this.createdAt = new Date();
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  addLike(username) {
    this.likes.push(username);
  }
}

// Comment Class
class Comment {
  constructor(content, creator) {
    this.content = content;
    this.creator = creator;
    this.createdAt = new Date();
  }
}

// Usage example
const user1 = new User("JohnDoe", "password123", "john.doe@example.com");
user1.login();
user1.createPost("My first post");
user1.createPost("Another post");
user1.commentOnPost(1, "Great post!");
user1.likePost(2);
user1.logout();