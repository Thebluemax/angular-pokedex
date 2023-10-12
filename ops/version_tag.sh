#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail
if [[ "${TRACE-0}" == "1" ]]; then
    set -o xtrace
fi

if [[ "${1-}" =~ ^-*h(elp)?$ ]]; then
    echo 'Usage: ./version_tag.sh 

discover the tag version from the actual branch.

'
    exit
fi

cd "$(dirname "$0")"

main() {
    local branch
    branch="$(git rev-parse --abbrev-ref HEAD)"
    if [[ "${branch}" =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
        echo "${branch}"
    else
        echo "error: branch ${branch} is not a valid version tag" >&2
        echo "${branch//[\/-]/\_}"
    fi
    
}

main "$@" 