import React from 'react';
import '../../styles/colors.css';
import DiscordLogo from '../../images/discord-logo-36.png';

const SignInButton = function SignInButton()
{
  // TODO: this URL should come from the API
  return (
    <a
      className="button is-large has-text-white has-background-blurple"
      // local dev:
      href="https://discordapp.com/api/oauth2/authorize?client_id=431216339894534145&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Freturn&response_type=code&scope=identify%20guilds"
      // local prod:
      // href="https://discordapp.com/api/oauth2/authorize?client_id=418944099127918602&redirect_uri=http%3A%2F%2Flocalhost%2Fauth%2Freturn&response_type=code&scope=identify%20guilds"
      // prod:
      // href="https://discordapp.com/api/oauth2/authorize?client_id=418944099127918602&redirect_uri=http%3A%2F%2Fpbot.jmcountryman.com%2Fauth%2Freturn&response_type=code&scope=identify%20guilds"
    >
      Sign in with
      <img alt="Discord" src={DiscordLogo} />
    </a>
  );
};

export default SignInButton;
