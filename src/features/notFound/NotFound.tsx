import { AlertCircle, ArrowLeft, Compass, Home } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';

import { Button } from '@/components/ui/button';

export function NotFoundPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <section className="relative flex h-full min-h-full items-center justify-center overflow-hidden px-4 py-8 md:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="absolute left-[8%] top-16 h-40 w-40 rounded-full bg-amber-200/35 blur-3xl" />
        <div className="absolute bottom-10 right-[12%] h-56 w-56 rounded-full bg-orange-200/35 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-5xl items-center justify-center">
        <div className="grid w-full gap-8 p-2 xl:grid-cols-[1.15fr_0.85fr] xl:p-4">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-900">
              <AlertCircle className="size-4" />
              Route not found
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">
                Error 404
              </p>
              <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                This page stepped out of the queue.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                The route you tried to open does not exist in the app right now.
                You can head back, return home, or keep exploring from the
                dashboard.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 xxs:flex-nowrap xxs:justify-between xs:justify-start">
              <Button
                type="button"
                className="h-11 rounded-full bg-slate-950 px-5 text-white hover:bg-slate-800 w-full xxs:w-auto"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="size-4" />
                Go Back
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full border-slate-300 bg-white/80 px-5 w-full xxs:w-auto"
              >
                <Link to="/">
                  <Home className="size-4" />
                  Go Home
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-inner">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-amber-300">
                <Compass className="size-5" />
                <span className="text-sm font-medium uppercase tracking-[0.28em]">
                  Missing Path
                </span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-300">Requested URL</p>
                <p className="mt-2 break-all font-mono text-sm text-white md:text-base">
                  {pathname}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-white/6 p-4 text-sm leading-6 text-slate-300">
              This screen now stays inside React Router, so visiting a missing
              route from the sidebar no longer forces a browser refresh.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
