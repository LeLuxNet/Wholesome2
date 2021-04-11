import axios, { AxiosInstance } from "axios";
import Auth from "./auth";
import { Scope } from "./auth/scopes";
import SelfEndpoint from "./endpoint/self/interface";
import authInterceptor from "./http/auth";
import bodyInterceptor from "./http/body";
import debugInterceptor from "./http/debug";
import errorInterceptor from "./http/error";
import fieldInterceptor from "./http/fields";
import { Submission } from "./objects/post/submission";
import { Subreddit } from "./objects/subreddit";

interface RedditConstructor {
  userAgent: string;

  debug?: boolean;
}

export default class Reddit {
  api: AxiosInstance;

  auth?: Auth;

  selfEndpoint?: SelfEndpoint;

  constructor(data: RedditConstructor) {
    this.api = axios.create({
      baseURL: "https://www.reddit.com",
      headers: {
        "User-Agent": data.userAgent,
      },
      params: {
        raw_json: 1,
      },
    });

    this.api.interceptors.request.use(fieldInterceptor);
    this.api.interceptors.request.use(bodyInterceptor);
    this.api.interceptors.request.use(authInterceptor(this));

    if (data.debug) {
      this.api.interceptors.response.use(debugInterceptor);
    }
    this.api.interceptors.response.use(errorInterceptor);
  }

  authScope(...scopes: Scope[]) {}

  submission(id: string) {
    return new Submission(this, id);
  }

  subreddit(name: string) {
    return new Subreddit(this, name);
  }
}
