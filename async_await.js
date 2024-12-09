// ASYNC AWAIT

// const promise = fetch('https://jsonplaceholder.typicode.com/users');

// console.log(promise);

async function fetchUsers() {
    console.log("Fetching users...");
    const userResults = await fetch('https://jsonplaceholder.typicode.com/users');


    const userList = await userResults.json();


    const postsResults = await fetch('https://jsonplaceholder.typicode.com/posts');

    const postsList = await postsResults.json();

    console.log("Users fetched!");
    console.log(userList);

    console.log("Posts fetched!");
    console.log(postsList);


}






fetchUsers();