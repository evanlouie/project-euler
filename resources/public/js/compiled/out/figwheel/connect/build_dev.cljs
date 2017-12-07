(ns figwheel.connect.build-dev (:require [figwheel.client] [figwheel.client.utils] [project-euler.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/project-euler.core.on-js-reload (apply js/project-euler.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'project-euler.core/on-js-reload' is missing"))), :open-urls ["http://localhost:3449/index.html"], :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

