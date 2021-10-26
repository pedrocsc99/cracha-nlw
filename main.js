const links = {
  github: 'pedrocsc99',
  youtube: '/channel/UCNBIYjAE8Z2MVaKIso7QkpA',
  instagram: 'pedro.csc.99',
  facebook: 'pedro.cardoso.9256',
  twitter: 'pedro_csc_'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImg.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

changeSocialMediaLinks()
getGitHubProfileInfos()
