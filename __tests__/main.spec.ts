// import { Delays, greeter } from '../src/main';

import {GitSource, SecretType} from "../src/service/modal/gitsource";
import {BitbucketService} from "../src/service/bitbucket_service";
import * as assert from "assert";

describe('greeter function', () => {
  // Read more about fake timers: http://facebook.github.io/jest/docs/en/timer-mocks.html#content
  jest.useFakeTimers();

  // const name: string = 'John';
  // let hello: string;

  // Act before assertions
  beforeAll(async () => {
    // const p: Promise<string> = greeter(name);
    jest.runOnlyPendingTimers();
    jest.setTimeout(1000*10);
    // hello = await p;
  });

  // // Assert if setTimeout was called properly
  // it('delays the greeting by 2 seconds', () => {
  //   expect(setTimeout).toHaveBeenCalledTimes(1);
  //   expect(setTimeout).toHaveBeenLastCalledWith(
  //     expect.any(Function),
  //     Delays.Long,
  //   );
  // });
  //
  // // Assert greeter result
  // it('greets a user with `Hello, {name}` message', () => {
  //   expect(hello).toBe(`Hello, ${name}`);
  // });


  it('should return ok on existing public bitbucket repo', (done: any) => {
    const gr = new GitSource(
      "https://bitbucket.org/akshinde/testgitsource",
      SecretType.NO_AUTH,
      null
    )

    const gs = new BitbucketService(gr);
    gs.isRepoReachable()
      .then(() => {
        assert.ok("Repo is reachable");
        done();
      })
      .catch(() => {
        assert.fail("Repo is existing");
        done();
      })
  });

  it('should return ok on existing private bitbucket repo', (done: any) => {
    const gr = new GitSource(
      "https://bitbucket.org/siminsights/cts-web-app",
      SecretType.BASIC_AUTH,
      {
        username: 'akash.kindertouch@gmail.com',
        password: '9011543105'
      }
    );

    const gs = new BitbucketService(gr);
    gs.isRepoReachable()
      .then(() => {
        assert.ok("Repo is reachable");
        done();
      })
      .catch(() => {
        assert.fail("Repo does not exist");
        done();
      })
  })

});
