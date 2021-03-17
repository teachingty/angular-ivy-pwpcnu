import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { of, Observable } from "rxjs";

@Injectable()
export class AboutGuard {
  canActivate(
    route: ActivateRoute,
    routeSnapshot: ActivatedRoutesnapshot
  ): Observable<boolean> {
    if (routeSnapshot.data["id"] === 1) {
      return of(true);
    }
    return of(false);
  }
}
