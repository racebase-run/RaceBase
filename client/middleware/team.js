// middleware/team.js

export default function({ store, redirect }) {
    let isLoggedIn = store.getters['auth/isLoggedIn'];
    let user = { ...store.state.auth.user };
    if (!isLoggedIn)
        return redirect('/login');
    else if (!user.team_id)
        return redirect('/user/settings');
}