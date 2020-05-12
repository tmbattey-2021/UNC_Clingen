<?php

return [
    'driver' => env('STREAMING_SEVICE_ENABLE_PUSH', false) ? 'log' : env('STREAMING_SEVICE_DRIVER', 'kafka'),
    'enable-push' => env('STREAMING_SERVICE_ENABLE_PUSH', false),
    'cert-location' => env('KAFKA_CERT', '/etc/pki/tls/certs/kafka.web3demo.signed.crt'),
    'key-location' => env('KAFKA_KEY_LOCATION', '/etc/pki/tls/private/kafka.apache.key'),
    'ca-location' =>  env('KAFKA_CA_LOCATION', '/etc/pki/ca-trust/extracted/openssl/ca-kafka-cert'),
    'ssl-key-password' => env('KAFKA_KEY_PASSWORD', null),
    'group' => env('KAFKA_GROUP', 'unc_demo'),
    'gci-topic' => env('GCI_TOPIC', 'gene_validity_events'),
    'warn-disabled' => env('STREAMING_SERVICE_WARN_DISABLED', true),
    'consume' => env('STREAMING_SERVICE_CONSUME', true),
];
