#include <iostream>
#include <vector>

using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    vector<bool> dp(n);
    dp[0] = true;
    dp[1] = false;
    dp[2] = true;
    dp[3] = true;

    for (int i = 4; i < n; i++) {
        dp[i] = !(dp[i - 1] && dp[i - 3] && dp[i - 4]);
    }

    cout << (dp[n - 1] ? "SK" : "CY") << "\n";
    return 0;
}