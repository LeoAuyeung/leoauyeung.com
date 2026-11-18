# hello@leoauyeung.com — email forwarding

## How it works
A website and email are separate services that share a domain name. DNS holds a few kinds of records:

- **A / CNAME records** say where the *website* lives (GitHub Pages).
- **MX records** say which server *accepts email* for the domain.

To get `hello@leoauyeung.com`, you point the MX records at a forwarding service. When someone emails `hello@`, their mail server looks up the MX records, delivers the message to the forwarder, and the forwarder relays it to Gmail. There's no mailbox to manage, and the website isn't affected.

The domain's DNS is managed in **Squarespace Domains** (the nameservers are `ns-cloud-c*.googledomains.com`; Google Domains moved to Squarespace in 2023). Squarespace offers free email forwarding.

## Set up forwarding (about 5 minutes)
1. Go to https://domains.squarespace.com → **leoauyeung.com** → **Email** → **Email forwarding**.
2. Add a rule: alias `hello` → `leo297747@gmail.com`. Squarespace adds the MX and SPF records itself; the GitHub Pages records are untouched.
3. Click the verification link Squarespace sends to Gmail.
4. Test it: from another email account, send a message to `hello@leoauyeung.com`. It can take a few minutes (rarely up to an hour) for the DNS change to spread.

Check the records yourself: `nslookup -type=MX leoauyeung.com 8.8.8.8`

## Optional: reply *as* hello@
Forwarding only covers incoming mail. To send from `hello@` in Gmail:
1. Turn on 2-Step Verification for the Google account, then create an **app password** at https://myaccount.google.com/apppasswords.
2. Gmail → Settings → **Accounts and Import** → **Send mail as** → *Add another email address* → `hello@leoauyeung.com`.
3. SMTP server `smtp.gmail.com`, port `587`, username `leo297747@gmail.com`, password = the app password, TLS.
4. Gmail emails a confirmation code to `hello@`; it arrives via the forwarding you set up above.

## After it works
- Set `email` in `src/data/site.ts` to `hello@leoauyeung.com` and push.
- Update the email on the résumé, export it without the phone number, and replace `public/resume.pdf`.
